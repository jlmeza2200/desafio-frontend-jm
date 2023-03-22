## DESAFÍO ##

Crear una aplicación web que muestre una lista de elementos obtenidos a través de una API. Cada elemento debe incluir una imagen, título y descripción. Además, el usuario debe poder hacer clic en cada elemento para verlo individualmente en una página separada.

La API puede ser de cualquier fuente, siempre y cuando tenga imágenes y una descripción que se pueda mostrar. Aquí hay un ejemplo de API que se puede utilizar: https://jsonplaceholder.typicode.com/photos 

REQUISITOS TÉCNICOS:

1. La aplicación debe estar construida usando React.
2. Debe consumir datos de la API proporcionada o la elegida por el usuario.
3. La aplicación debe tener al menos dos páginas: una para mostrar la lista de elementos y otra para mostrar un elemento individual.
4. La aplicación debe tener una interfaz de usuario amigable y atractiva.
5. La aplicación debe ser responsiva y funcionar en dispositivos móviles.
6. El código debe ser legible y seguir las mejores prácticas de codificación.

## Propuesta ##

Se entrega el desarrollo web que simula un E-commerce con las siguientes características:

Estilos: Se usó vite con react js, para los estilos se utilizaron estilos en línea y MUI.

El proyecto se desarrolló con programación funcional.

Para hacer el llamado a la API (https://jsonplaceholder.typicode.com/photos), se hice uso de la API FETCH integrada en Js.

Se utilizó estados (useState) y efecto de montaje (UseEffect) para crear la lógica que realiza el llamado a la API.

Al comienzo el useEffect que contiene el fetch que llama a la API, se utilizó en los componentes ItemDetail y ItemList, pero luego como mejora (código más limpio, evitar el uso de código repetido y tener centralizada la lógica que a futuro se puede editar para mejora o escalar ) se crea el custom hook getProducts.

Rutas: se implementa react router dom para el ruteo de las páginas Home, ItemDetail y * que redirige a la / cuando la url no existe.

Hook UseParams, para el parámetro id de cada producto que pueda ser utilizado al ingresar a ver el detalle de un producto.

Se utilizan los métodos slice y find para el manejo del array que trae la respuesta de la API, con ello se buscó poder obtener 6 objetos de los 5000 que contiene, y por otro lado buscamos el id para luego usarlo como producto seleccionado que renderizaremos con sus detalles.



