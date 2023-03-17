

# INSTRUCCIONES PARA LA CLASE

​

Se trata de programar una app de generación de contraseñas desde cero, a lo largo de una clase.

​

Los alumnos se separarán en grupos de dos o tres. Ambos trabajarán sobre el mismo repo, turnándose:

- Uno de ellos comparte pantalla y escribe código.

- El otro apoya y comparte ideas, busca recursos o documentación...

​

El proceso de creación de la app se divide en pasos. Los alumnos tienen un período de 5 - 10 minutos para resolver cada parte. Cada paso tiene un reto extra, por si el equipo termina antes de tiempo y quiere practicar conceptos más avanzados.

​

## PASOS A SEGUIR

​

### 1. Analizar la aplicación todos juntos para elaborar una estrategia de resolución

​

> **Conceptos trabajados** Workflow

​

> **Tiempo máximo** 5 minutos

​

Esta parte la hace toda la clase junta. El objetivo es analizar los pasos que tendremos que dar para completar la aplicación. Deberíamos discutir diferentes tipos de estrategias y ver pros y contras.

​

Si aparece alguna propuesta significativamente mejor que los pasos planteados en esta guía, debemos adaptarnos a ella.

​

Antes de pasar a equipos, que se abran los repos e instalen react y react-bootstrap y hacer en público el paso 1 para que sepan cómo utilizar la librería react-bootstrap. Avisar que pueden utilizar tanto bootstrap como CSS como react-bootstrap

​

```` bash

npx create-react-app .

````

​

```` bash

npm install react-bootstrap bootstrap

````

​

### 2. Crear un componente Navbar

​

> **Conceptos trabajados** Components

​

> **Tiempo máximo** 10 minutos

​

> **Retos adicionales** Que los links del Navbar se rendericen mediante un .map, ejecutado sobre un array importado desde un archivo externo.

​

Los estudiantes deben crear un Navbar para toda su aplicación que contenga:

- Un título

- Un enlace a home

- Otro enlace a las contraseñas guardadas

No es necesario que estos enlaces funcionen todavía

​

### 3. Crear un componente Hero

​

> **Conceptos trabajados** Components

​

> **Tiempo máximo** 10 minutos

​

> **Retos adicionales** Que el background tenga una imagen

​

Los estudiantes deben crear un Hero para su página principal que contenga:

- Un título

- Una descripción de la aplicación

- Un color de fondo

​

### 4. Crear un componente Checkbox

​

> **Conceptos trabajados** Components, controlled inputs, props

​

> **Tiempo máximo** 15 minutos

​

> **Retos adicionales** Que las props lleguen con un valor por defecto. Añadir PropTypes

​

Los estudiantes deben crear un Checkbox que contenga:

- Un estado para controlar si está o no checkeado

- Un handler para gestionar el click del usuario

- Una prop label con el texto a mostrar

- Una prop initiallyChecked con el estado inicial

​

### 5. Crear un componente Options

​

> **Conceptos trabajados** Components, props

​

> **Tiempo máximo** 15 minutos

​

> **Retos adicionales** Crear también un componente Slider, que acepte valores entre 8 y 18

​

Los estudiantes deben crear un componente Options que contenga:

- Un título (por ejemplo, "Selecciona tus opciones")

- Un Checkbox con el label "Incluir mayúsculas"

- Un Checkbox con el label "Incluir números"

- Un Checkbox con el label "Incluir símbolos"

- Un título tipo "Esta es tu contraseña"

- Un placeholder para la contraseña. Por ejemplo, un p u otro h con el texto "Contraseña"

- Los estudiantes pueden prepararse estados para controlar si cada uno de los checkbox está o no marcado

​

### 6. Crear un componente Main

​

> **Conceptos trabajados** Components

​

> **Tiempo máximo** 10 minutos

​

> **Retos adicionales** Crear también un componente Slider, que acepte valores entre 8 y 18, si todavía no se ha hecho. En caso contrario, que dediquen un tiempo a los estilos

​

Los estudiantes deben crear un componente (vista) Main que contenga:

- Hero

- Options

​

### 7. Crear un componente ListItem

​

> **Conceptos trabajados** Components, children

​

> **Tiempo máximo** 10 minutos

​

> **Retos adicionales** Que el contenido no provenga de una prop text, sino de children. Revisar estilos

​

Los estudiantes deben crear un componente ListItem que:

- utilice la clase list-group-item de bootstrap

- reciba una prop text para pintar su contenido

​

### 8. Crear un componente List

​

> **Conceptos trabajados** Components, children

​

> **Tiempo máximo** 10 minutos

​

> **Retos adicionales** Revisar estilos

​

Los estudiantes deben crear un componente List que:

- utilice la clase list-group de bootstrap

- utilice la prop children para pintar su contenido

​

### 9. Crear un componente MyPasswords

​

> **Conceptos trabajados** Components

​

> **Tiempo máximo** 15 minutos

​

> **Retos adicionales** 

​

Los estudiantes deben crear un componente (vista) MyPasswords que contenga:

- Hero

- List

- ListItems

- Un título (por ejemplo, "contraseñas guardadas")

**IMPORTANTE:** Si todavía no lo han hecho, deberían configurar el Hero para que reciba su título y subtítulo mediante props, para hacerlo reutilizable

​

### 10. Generar rutas

​

> **Conceptos trabajados** Routing

​

> **Tiempo máximo** 15 minutos

​

> **Retos adicionales** 

​

Los estudiantes deben crear el sistema de enrutado de la aplicación:

- Instalar react-router-dom

- Crear la estructura BrowserRouter > Routes > Route

- Asociar Main a /

- Asociar MyPasswords a /my-passwords

- Actualizar Navbar para que el usuario pueda navegar

​

### 11. Lógica de generación de contraseñas

​

> **Conceptos trabajados** JS, eventos

​

> **Tiempo máximo** 20 minutos

​

> **Retos adicionales** 

​

Los estudiantes deben conectar la lógica de generación de contraseñas. Les

proporcionaremos una función que reciba los parámetros (bool) majus, numbers y symbols y deben conectarla con su interfaz para generar la contraseña:

- Necesitarán un estado en Options que guarde la contaseña

- Necesitarán un botón en Options que llame a la función de generar contraseña, leyendo las opciones marcadas

- Necesitarán que el título "esta es tu contraseña" y la propia contraseña se muestren dinámicamente

​

### 12. Crear y conectar contexto

​

> **Conceptos trabajados** React context

​

> **Tiempo máximo** 20 minutos

​

> **Retos adicionales** 

​

Los estudiantes deben crear un contexto para su aplicación y almacenar en su store todos los estados y en sus actions todas sus acciones

​

### 13. Crear función de guardar contraseñas

​

> **Conceptos trabajados** React context

​

> **Tiempo máximo** 20 minutos

​

> **Retos adicionales** 

​

Los estudiantes deben crear una funcionalidad para guardar contraseñas. Para ello necesitarán:

1. Un nuevo estado en su context para exponer la lista de contraseñas guardadas

2. Una nueva función que:

    1. guarde la nueva contraseña en el estado de listado de contraseñas

    2. resetee la contraseña generada y los checkboxes

    3. lleve al usuario a /my-passwords

