import { createContext, useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const  CartProvider = ({children}) => {

     const [ carrito, setCarrito] = useState([carritoInicial]); 

     const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = {...item, cantidad};
        
     /*  if(carrito.find((producto) => producto.id === itemAgregado.id)) {
          console.log("Está en el carrito")
       }   else{
        console.log("No está")
       } 
       localStorage.setItem()
    }*/

    const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);
    }


    const cantidadEnCarrito = () =>{
      return carrito.reduce((acc,prod) => acc + prod.cantidad, 0);
    } 
   
    const precioTotal = () => {
      return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }
    
    const borrarCarrito = () =>{
      setCarrito([]);  
    }
 
    return(
     <CartContext.Provider value={{
        carrito,
         agregarAlCarrito, 
        cantidadEnCarrito,
        precioTotal, 
        borrarCarrito}}>
        {children}

     </CartContext.Provider>
    )
}  

