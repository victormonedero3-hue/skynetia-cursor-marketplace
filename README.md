# SkynetIA Private Marketplace

Marketplace privado de Cursor/Grok Bot para los conectores internos de SkynetIA.

## Plugin incluido

- `skynetia-gbrain-read`: conecta con `https://gbrain.skynetia.es/mcp` mediante una credencial de solo lectura guardada en la configuración segura de Cursor.

El repositorio no contiene tokens, contraseñas ni datos de clientes.

## Instalación para el equipo

1. En Cursor Dashboard, abrir **Plugins**.
2. Añadir este repositorio como marketplace privado del equipo.
3. Instalar `skynetia-gbrain-read`.
4. Configurar la variable secreta `GBRAIN_READ_TOKEN`.

## Verificación

El conector debe aparecer conectado y permitir búsquedas, lectura de páginas y navegación del grafo. No debe autorizar operaciones de escritura.
