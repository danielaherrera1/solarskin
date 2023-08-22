import React, { useContext } from "react"
import { CartContext } from "../layouts/CartContext"

const Carrito = () => {

    const { carrito, precioTotal, borrarCarrito } = useContext(CartContext);

    const handlerBorrar = () =>{
        
        borrarCarrito();
    }
    return(
        <div className="carro">
          <h1 className="main-title">Carro de compra </h1>
        
        {
            carrito.map((prod) =>(
                <div key={prod.id}>
                  <h2>{prod.nombre}</h2>
                  <p>Precio unitario: ${prod.precio}</p>
                  
                  <p>Precio total: ${precioTotal()}</p>
                  <p>Precio total: ${prod.precio * prod.cantidad}</p>
                  <p>Cant: {prod.cantidad}</p>
                </div>
            
            ))

        }
        
        {
           carrito.length > 0 ?
             <>
                <h2>Precio total: ${precioTotal()}</h2>
                <button onClick={handlerBorrar}>Borrar</button>
             </>:
             <h2>El carrito esta vacío</h2>
        }
       
        
        
        </div>
    )
}

export default Carrito