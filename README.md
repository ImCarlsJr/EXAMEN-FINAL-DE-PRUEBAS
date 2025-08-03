# EXAMEN-FINAL-DE-PRUEBAS
# Proyecto Final - Testing Automatizado

Este repositorio contiene la implementación de pruebas automatizadas utilizando dos APIs públicas:  
- **JSONPlaceholder:** para pruebas básicas CRUD.  
- **Restful-Booker:** para pruebas de autenticación y gestión de reservas.

Se usaron tres herramientas principales:  
- Postman (API Testing)  
- Cypress (Pruebas End-to-End)  
- Katalon Studio (Pruebas UI + API combinadas)

---

## Estructura del repositorio

- `/postman` : Colecciones y entorno para Postman  
- `/cypress` : Scripts para pruebas E2E con Cypress  
- `/katalon` : Proyecto completo de Katalon Studio  
- `/docs` : Documentación, capturas y manuales  

---

## Requisitos previos

- Node.js y npm instalados (para Cypress)  
- Postman instalado (app o web)  
- Katalon Studio instalado

---

## Cómo ejecutar las pruebas

### Postman

1. Importa la colección `/postman/Collection-Tests.json` y el entorno `/postman/Environment-Testing.postman_environment.json`.  
2. Ejecuta las pruebas desde el Collection Runner o usando Newman.

### Cypress

1. Abre consola en `/cypress`.  
2. Ejecuta `npm install` para instalar dependencias.  
3. Corre `npx cypress open` para abrir el runner y ejecutar tests, o `npx cypress run` para headless.

### Katalon Studio

1. Abre Katalon Studio y carga el proyecto en `/katalon`.  
2. Ejecuta los test cases o suites desde la interfaz.  
3. Revisa reportes y capturas.

---

## Contacto

Proyecto realizado por [Tu Nombre]  
Email: tu.email@example.com  
