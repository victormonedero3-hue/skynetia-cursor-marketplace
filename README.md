# SkynetIA Cursor Marketplace

Marketplace público de plugins seguros desarrollados por SkynetIA para Cursor y Grok Bot.

## Plugin incluido

- `skynetia-gbrain-read`: conecta con `https://gbrain.skynetia.es/mcp` mediante una credencial de solo lectura guardada en la configuración segura de Cursor.

El repositorio no contiene tokens, contraseñas ni datos de clientes.

## Instalación

1. Instalar `skynetia-gbrain-read` desde Cursor Marketplace.
2. Abrir **Plugins → SkynetIA GBrain Read → Configure**.
3. Guardar en `GBRAIN_READ_TOKEN` una credencial individual con alcance `read`.
4. Verificar que el MCP aparece conectado.

## Verificación

El conector debe aparecer conectado y permitir búsquedas, lectura de páginas y navegación del grafo. No debe autorizar operaciones de escritura.
