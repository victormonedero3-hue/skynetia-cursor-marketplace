#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import { createInterface } from "node:readline";

const endpoint = process.env.GBRAIN_MCP_URL ?? "https://gbrain.skynetia.es/mcp";
const tokenFile = process.env.GBRAIN_TOKEN_FILE;

if (!tokenFile) {
  console.error("GBRAIN_TOKEN_FILE no está configurado");
  process.exit(1);
}

let token;

try {
  token = (await readFile(tokenFile, "utf8")).trim();
} catch {
  console.error("No se pudo leer el fichero de credencial GBrain");
  process.exit(1);
}

if (token.length < 32 || /\s/.test(token)) {
  console.error("La credencial GBrain no tiene un formato válido");
  process.exit(1);
}

let sessionId;

function emit(message) {
  process.stdout.write(`${JSON.stringify(message)}\n`);
}

function decodeResponse(body, contentType) {
  if (!body.trim()) return [];

  if (contentType.includes("text/event-stream")) {
    return body
      .split(/\r?\n/)
      .filter((line) => line.startsWith("data:"))
      .map((line) => line.slice(5).trim())
      .filter(Boolean)
      .map((line) => JSON.parse(line));
  }

  return [JSON.parse(body)];
}

async function forward(message) {
  const headers = {
    Accept: "application/json, text/event-stream",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  if (sessionId) headers["Mcp-Session-Id"] = sessionId;

  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify(message),
  });

  const receivedSession = response.headers.get("mcp-session-id");
  if (receivedSession) sessionId = receivedSession;

  const body = await response.text();

  if (!response.ok) {
    if (message.id !== undefined) {
      emit({
        jsonrpc: "2.0",
        id: message.id,
        error: {
          code: -32000,
          message: `GBrain devolvió HTTP ${response.status}`,
        },
      });
    }
    return;
  }

  for (const remoteMessage of decodeResponse(
    body,
    response.headers.get("content-type") ?? "",
  )) {
    emit(remoteMessage);
  }
}

const input = createInterface({ input: process.stdin, crlfDelay: Infinity });
let queue = Promise.resolve();

input.on("line", (line) => {
  if (!line.trim()) return;

  let message;
  try {
    message = JSON.parse(line);
  } catch {
    emit({
      jsonrpc: "2.0",
      id: null,
      error: { code: -32700, message: "JSON no válido" },
    });
    return;
  }

  queue = queue.then(() => forward(message)).catch((error) => {
    if (message.id !== undefined) {
      emit({
        jsonrpc: "2.0",
        id: message.id,
        error: {
          code: -32001,
          message: `No se pudo conectar con GBrain: ${error.message}`,
        },
      });
    }
  });
});
