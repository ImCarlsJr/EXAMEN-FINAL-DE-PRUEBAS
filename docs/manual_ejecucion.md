
# 2. docs/manual\_ejecucion.md

````markdown
# Manual de Ejecución de Pruebas Automatizadas

Este documento explica cómo ejecutar las pruebas automatizadas en las tres herramientas utilizadas.

---

## 1. Postman

- Abre Postman (app o versión web).  
- Importa la colección ubicada en `/postman/Collection-Tests.json`.  
- Importa el entorno `/postman/Environment-Testing.postman_environment.json`.  
- Selecciona la colección y abre el **Collection Runner**.  
- Ejecuta todas las pruebas y revisa resultados.  
- Opcional: usa Newman para ejecutar desde línea de comandos:

```bash
newman run postman/Collection-Tests.json -e postman/Environment-Testing.postman_environment.json
````

---

## 2. Cypress

* Abre una terminal en la carpeta `/cypress`.
* Instala dependencias si es la primera vez:

```bash
npm install
```

* Ejecuta el test runner:

```bash
npx cypress open
```

* Selecciona el archivo `jsonplaceholder_spec.js` y ejecuta las pruebas.
* Para ejecución sin interfaz:

```bash
npx cypress run
```

---

## 3. Katalon Studio

* Abre Katalon Studio.
* Abre el proyecto en la carpeta `/katalon`.
* Navega a los test cases o test suites.
* Ejecuta los casos y revisa los reportes generados.
* Utiliza la función de Data Driven Testing si aplica.

---

```

---

