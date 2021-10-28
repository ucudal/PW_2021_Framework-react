[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=5990355&assignment_repo_type=AssignmentRepo)

# React 

Es una librería de Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. 

## Características y funcionalidades principales:

### 1. Arquitectura basada en componentes: 

React,js permite construir componentes encapsulados con funcionalidad, estado y lógica aisladas del resto de la aplicación. Un componente puede tener sus propias variables, funciones, estado e interfaz. Cada componente existir y funcionar independientemente de todos los demás componentes de la aplicación si así se requiere.

Los componentes pueden representar cualquier aspecto de la aplicación, desde lo más simple hasta lo más complejo, además un grupo de componentes puede construir nuevos componentes totalmente nuevos.

Los componentes se pueden ser funcionales (Construidos con funciones) o clásicos (Construidos con clases)

Ejemplos de componentes:

	- Tarjeta con información
	- Formulario - Modal 
	- La misma aplicación (Es un componente construido con todos los componentes)

### 2. Sintaxis parecida a XML: JSX

React.js utiliza una sintaxis llamada JSX, parecida a XML que permite “mezclar” Javascript con HTML. JSX permite insertar variables e incluso funciones directamente en el HTML y así poder hacer la aplicación altamente “reactiva” a cambios de estado y funcionalidad de Javascript.

También es posible crear variables que contengan estilos, objeto parecido a CSS, y cambiarlos dependiendo de variables, estado o interacciones del usuario. Las clases de un elemento HTML se pueden modificar de igual manera. 

El objetivo de esta sintaxis es que se recurra al DOM lo menos posible, ya que react accede a él de la forma más optimizada posible. 

### 3. Brinda una manera completamente distinta de desarrollar WEB

La forma de construir una aplicación WEB con React.js es marcadamente distinta a la de hacerlo tradicionalmente. Es posible que desarrolladores avanzados de React sean incapaces de replicar de manera “tradicional” ciertas funcionalidades. Esto se da por razones específicas

    1. En react todo es Javascript y se mezcla con el HTML(JSX) e incluso con el CSS.
    2. Usualmente nunca se recurre al objecto de document (DOM).
    3. El manejo de estado

## Nivel de mantenimiento y comunidad

React.js fue creado por Facebook y es mantenido por una comunidad muy grande de usuarios open source.

### [Sitio oficial](https://reactjs.org/community/support.html)

### [Stack Overflow](https://stackoverflow.com/questions/tagged/reactjs)
Si tienes alguna duda sobre tu código react, aquí es el lugar indicado.
Tiene al día de hoy 340.122 publicadas preguntas.

### Foros de discusión más populares
Cuenta con varios foros de discusión sobre buenas prácticas y el futuro de react.

- [DEV’s React community](https://dev.to/t/react)

- [Hashnode’s React community](https://hashnode.com/n/reactjs)

- [Reactiflux online chat](https://discord.gg/reactiflux)

- [Reddit’s React community](https://www.reddit.com/r/reactjs/)

## Curva de aprendizaje

Como toda herramienta cuesta un poco al principio, pero es realmente muy sencillo de aprender y una vez que uno se familiariza con la forma de crear componentes y el manejo del hook de estados, se logra avanzar realmente rápido en el desarrollo de una aplicación web.

## Framework o librería

React por sí mismo es una librería de JavaScript para construir aplicaciones web altamente reactivas. y no un framework, puesto que se ocupa de las interfaces de usuario. Sin embargo, diversos añadidos pueden convertir a React en un producto equiparable en características a un framework. Por ejemplo, Redux, que implementa un patrón mediante el cual los datos fluyen entre componentes de la aplicación.

## Competencia

Hoy en día en cada nuevo proyecto de frontend hay una pregunta que se repite bastante seguido: ¿React o Angular?

Angular es un framework, es decir una solución todo en uno, que cuenta con sus herramientas para resolver problemas (routing, estados, http, etc), lo que implica que debas solucionarlos "a su manera".

Como ya vimos, React al ser una librería que solo se encarga de la vista, tienes la flexibilidad de poder resolver estos problemas de diversas formas. Una de ellas es apoyarse en otras librerías, como por ejemplo "Redux" para el manejo de estados.

Dependiendo el caso, lidiar con esa flexibilidad puede servir o no. Si tienes mucha experiencia en desarrollo frontend, te vendrá bien tener más margen en el cual moverte. Pero, si manejas mejor la parte de backend quizás te sea más fácil hacerlo mediante un framework.

No hay una mejor herramienta que otra, solo hay que saber elegir la correcta dependiendo el caso y perderle el miedo a aprender nuevas formas.
