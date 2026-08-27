---
name: gbrain-retrieval
description: Consulta GBrain de SkynetIA para recuperar contexto de proyectos, clientes, decisiones y relaciones sin modificar su contenido.
---

# Recuperación segura desde GBrain

Usa el servidor MCP `skynetia-gbrain-read` cuando la petición dependa de contexto interno de SkynetIA.

## Flujo

1. Formula una búsqueda estrecha con nombres de proyecto, cliente, sistema o decisión.
2. Abre solo las páginas relevantes de los resultados.
3. Recorre enlaces, backlinks o relaciones del grafo únicamente cuando aporten contexto necesario.
4. Distingue hechos documentados de inferencias y de estado vivo no verificado.
5. Resume la evidencia y menciona las fuentes internas consultadas.

## Límites

- Solo lectura: no importar, editar, enlazar, extraer, incrustar ni borrar contenido.
- No solicitar ni mostrar el token.
- No exponer datos personales o secretos recuperados.
- Mantener separados QLCube, Exa Jurídico y cualquier otro tenant.
- Para información cambiante, verificar el sistema de origen antes de afirmarla como actual.
