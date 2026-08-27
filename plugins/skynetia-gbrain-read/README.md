# SkynetIA GBrain Read

Conector MCP de solo lectura para consultar la memoria y el grafo de SkynetIA desde Cursor/Grok Bot.

## Seguridad

- La credencial se introduce como variable segura en Cursor.
- El repositorio contiene únicamente `${GBRAIN_READ_TOKEN}`; nunca contiene el valor real.
- La credencial provisionada en producción tiene alcance `read`.
- No usar este plugin para importar, modificar o borrar contenido.

## Uso recomendado

1. Buscar primero por términos concretos del cliente, proyecto o decisión.
2. Leer únicamente las páginas relevantes.
3. Consultar enlaces y backlinks cuando haga falta reconstruir contexto.
4. Citar la página o fuente utilizada en la respuesta.
5. Si falta evidencia actual, decirlo; GBrain no sustituye una verificación en vivo.
