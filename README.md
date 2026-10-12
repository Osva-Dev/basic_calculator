# Basic Calculator 🧮

Calculadora básica desarrollada en **JavaScript Vanilla**, creada con el fin de realizar operaciones matemáticas básicas a través de una interfaz sencilla de utilizar e interactiva.

---

## 1. INFORMACION GENERAL

- **Nombre del Proyecto:** Basic Calculator 1.0
- **Especialidad:** Web Developer.
- **Tipo de Proyecto:** Práctica.
- **Fuente del Proyecto:** Idea personal para practicar conocimientos y habilidades de programación en el FrontEnd.
- **Tecnologías:** HTML, CSS, JavaScript
- **Repositorio:** [GitHub - Basic Calculator](https://github.com/Osva-Dev/basic_calculator)
- **Demo:** [https://osva-dev.github.io/basic_calculator/](https://osva-dev.github.io/basic_calculator/)

---

## 2. OBJETIVO

Desarrollar una interfaz web interactiva que permita a cualquier usuario implementar operaciones matemáticas y funcionalidades básicas de una calculadora tradicional, ya sea presionando los botones correspondientes en la interfaz web o mediante las teclas de un teclado físico, obteniendo los resultados de manera simple y eficaz.

---

## 3. PLAN DE TRABAJO

### 🔍 Exploración Inicial

1. Implementar historias de usuario para mejorar la calidad visual y funcional de la calculadora.
2. Analizar el funcionamiento de una calculadora tradicional e inspeccionar sus características indispensables.
3. Identificar las funciones que se implementarán.
4. Realizar una propuesta de estructura de diseño y una paleta de colores para lograr una interfaz estética, limpia y fácil de usar.

### 📁 Preparación

- **Arquitectura modular:** Separación de componentes visuales enfocada en la metodología BEM, por lo que tenemos una carpeta llamada `blocks` y el archivo HTML se nombró de esa manera también.
- **Carpeta `vendor`:** Contiene el archivo `normalize.css` para estandarizar los estilos base en distintos navegadores.
- **Archivo `index.html`:** Define la estructura principal, enlazando las hojas de estilo y scripts correspondientes bajo metodología BEM.
- **Archivo `script.js`:** Contiene toda la lógica de programación, funcionalidades y eventos que dotan de interactividad a la calculadora.
- **Carpeta `page`:** Contiene el archivo `styles.css` encargado de importar los estilos generales.
- **Carpeta `blocks`:** Agrupa los componentes de forma modular mediante BEM para aislar visualmente los elementos.

### 🧱 Construcción

1. Creación de la estructura inicial e interfaz web con HTML a partir de bocetos y referencias, nombrando las etiquetas con la metodología BEM.
2. Estilo inicial con `styles.css`: ajuste de la pantalla de la calculadora utilizando `flex` y la botonera con `grid`.
3. Aplicación de una paleta de colores sólidos para diferenciar visualmente los componentes.
4. Investigación e implementación de eventos `click` y `keydown` para añadir la interactividad en `script.js`.
5. Integración de la lógica para reflejar números en pantalla al hacer clic, funciones de borrado total (`c`), borrado del último dígito (`<-`) y obtención de resultados (`=`).
6. Réplica de las funcionalidades anteriores mediante el teclado físico (`keydown`), permitiendo un doble método de entrada.
7. Incorporación de la carpeta `blocks` para modularizar los componentes y separar el contenido general de la interfaz y el diseño de la calculadora.

### 🧪 Evaluación

- Verificación exhaustiva de que cada operación matemática y función ejecutara la acción correcta tanto por medio de clics en la interfaz como con las teclas del teclado físico.
- Pruebas comparativas directas introduciendo operaciones simultáneamente en una calculadora de referencia y en la calculadora web para asegurar la precisión de los resultados.

---

### 💡 Conclusiones y Próximos Pasos

En esta actividad logré trasladar una herramienta física a una interfaz digital, demostrando que las esenciales de una calculadora se pueden replicar de manera satisfactoria utilizando JavaScript Vanilla. Esto sienta las bases para continuar escalando el proyecto e integrar en el futuro funcionalidades más avanzadas que exceden a una calculadora básica convencional.

## 4. PREGUNTAS CLAVE

- ¿La calculadora web realiza las mismas acciones de una calculadora física?
- ¿Cómo puedo hacer para que mis usuarios tengan un acceso más fácil al software?

## 5. QUÉ SE HIZO Y CÓMO

El primer paso fue identificar las características esenciales de una calculadora básica para después realizar historias de usuario y recolectar las más exactas. Para después iniciar el proyecto con los archivos básicos y darle estructura y diseño tanto a la calculadora como la interfaz web. Después procedí a indagar algunos aspectos y funcionalidades principalmente en la documentación de JavaScript ([MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)), vídeos de YouTube y para dudas específicas ChatGPT, para después implementar la lógica de programación y darle vida a mi calculadora.

## 6. RESULTADOS

Obtuvimos una calculadora totalmente funcional que cumple con doble forma de usar, tanto desde la interfaz web como en el teclado físico de la computadora. Básicamente logramos replicar una calculadora física a una calculadora que la puedes usar en una página web.

## 7. CONCLUSIONES

A partir de este proyecto personal logramos recordar cómo crear un proyecto de JavaScript Vanilla desde cero, recordé el uso correcto de la metodología BEM y su respectiva organización de componentes, realizamos la manipulación del DOM para que a partir de componentes como divs y botones logramos mostrar nuestras funciones en la pantalla de la calculadora así como los resultados de las operaciones matemáticas.
Demostrando que este proyecto es considerado en un nivel "básico" requerimos de un buen sentido del diseño UX/UI para una mejor calidad visual y uso intuitivo, así como plasmar y estructurar el diseño de una calculadora y sobre todo construir la lógica que hay detrás de esta herramienta de uso diario.
Esta práctica será el inicio de crear una calculadora con más funciones, permitiendo mejorar sus características e incluso llegar a obtener una calculadora con características similares a una científica.
También tomamos en cuenta algunas características del proyecto que podemos sacarle provecho para futuras entrevistas de trabajo tales como los eventos "click" y "keydown", manipulación del DOM y Metodología BEM.
