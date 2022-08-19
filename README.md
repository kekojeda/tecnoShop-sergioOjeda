# Tienda Online :shopping_cart: creada en [React](https://reactjs.org/).

Este proyecto consiste en el desarrollo front-end de una tienda virtual, usando [React](https://reactjs.org/) + [Firebase](https://firebase.google.com/)

 [Ver Proyecto en GitHub Pages](https://kekojeda.github.io/tecnoShop-sergioOjeda/)


## Componentes

### NavBar
 *Un Navbar con los NavLinks (usando react-router-dom) apuntando a los componentes correspondientes*
### CarWidget
 *Muestra, en el NavBar, un boton de carrito de compras, y si existen items agregados al carrito, este muestra la cantidad*
### Item
 *Vista general de un item que se mostrara en ItemList*
 ### ItemList
 *Muestra todos los items del archivo Json de productos, haciendo un map*
 ### ItemListContainer
 *Logica, Promesas, Hook de todo lo que necesitan los componenentes que se muestran en esta seccion / conexion a Firebase para traer los productos (todos los productos, o solo los productos de una determinada categoria)*
 ### ItemDetail
 *Muestra el detalle de un item especifico, recibiendo el id del item seleccionado. Usa ItemCount para elegir la cantidad de items a agregar al carrito*
 ### ItemCount
 *Muestra la cantidad de items que se agregaran al carrito, con la opcion de incrementar o decrementar esa cantidad, recibe el stock, cantidad inicial y una funcion, que sera la encargada de agregar estos items al carrito y usando cartContext los agrega al carrito*
  ### ItemDetailContainer
*Recibe el id del item seleccionado y le pasa el item asociado a ese ID a ItemDetail*
 