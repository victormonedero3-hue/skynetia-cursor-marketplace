# SkynetIA GBrain Read

Conector MCP de solo lectura para consultar la memoria y el grafo de SkynetIA desde Cursor y Grok Bot.

## Instalación

1. Instala el plugin desde Cursor Marketplace.
2. Abre `Plugins → SkynetIA GBrain Read → Configure`.
3. Guarda en `GBRAIN_READ_TOKEN` una credencial individual con alcance `read`.
4. Comprueba que `skynetia-gbrain-read` aparece conectado antes de consultarlo.

## Seguridad

- Cursor guarda la credencial mediante la variable segura `GBRAIN_READ_TOKEN`.
- El repositorio nunca contiene el valor real del token.
- Cada usuario debe recibir una credencial individual con alcance `read`.
- No usar este plugin para importar, modificar o borrar contenido.

## Uso recomendado

1. Buscar primero por términos concretos del cliente, proyecto o decisión.
2. Leer únicamente las páginas relevantes.
3. Consultar enlaces y backlinks cuando haga falta reconstruir contexto.
4. Citar la página o fuente utilizada en la respuesta.
5. Si falta evidencia actual, decirlo; GBrain no sustituye una verificación en vivo.
