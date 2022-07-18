# Tienda Online :shopping_cart: creada en [React](https://reactjs.org/).

Este proyecto consiste en el desarrollo front-end de una tienda virtual, usando [React](https://reactjs.org/) + [Firebase](https://firebase.google.com/)

 [Ver Proyecto en GitHub Pages](https://kekojeda.github.io/tecnoShop-sergioOjeda/)


## Componentes

### NavBar
 *Un Navbar con los NavLinks (usando react-router-dom) apuntando a los componentes correspondientes*
 *----- En Desarrollo*
### CarWidget
 *Muestra, en el NavBar, un boton de carrito de compras*
### Item
 *Vista general de un item que se mostrara en ItemList*
 ### ItemList
 *Muestra todos los items del archivo Json de productos, haciendo un map*
 ### ItemListContainer
 *Logica, Promesas, Hook de todo lo que necesitan los componenentes que se muestran en esta seccion*
 ### ItemDetail
 *Muestra el detalle de un item especifico, recibiendo por useParams el id del item seleccionado*
 ### ItemCount
 *Muestra la cantidad de items que se agregaran al carrito, con la opcion de incrementar o decrementar esa cantidad, recibe el stock, cantidad inicial y una funcion, que sera la encargada de agregar estos items al carritp*
  ### ItemDetailContainer
 *Logica, Promesas y Hook de todo lo que necesita el componente para mostrarse*
 ### CategoriaContainer
 *Filtra el Json de productos y muestra, dependiendo el id de categoria que reciba por useParams, los items que correspondan a esta categoria*