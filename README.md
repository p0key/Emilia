# Emilia - Sistema de administración

Emilia es un sistema diseñado para la administración y geolocalización de activos dentro de CONAF.

## Ejecución en un entorno local

Este proyecto funciona bajo el framework de React.

- Instale `Node.js` en su equipo.
- Instale los requerimientos usando el comando `npm i`
- Este comando descargará las dependencias necesarias y las guardará dentro del directorio `node_modules`
- Use `npm start` para ejecutar un servidor de pruebas en la URL http://localhost:3000.

## Crear paquete de producción

- Ejecute `npm run build` para generar un paquete de producción.

Este comando creará uan versión optimizada del código lista para ser subida al entorno de producción en su servidor.

Para ejecutar una versión de producción de forma local, use los siguientes comandos:

```shell
 npm install -g serve
 serve -s build
```