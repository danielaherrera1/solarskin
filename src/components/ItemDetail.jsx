
/*desde aca
import { useContext } from "react"
import Item from "./Item"
import ItemCount from "./ItemCount"
import { CartContext } from "../layouts/CartContext"

const ItemDetail = ({item}) => {

     const { carrito, agregarAlCarrito} = useContext(CartContext)
     console.log(carrito);

*/


/*desde aca*/ 
import { useContext, useState } from "react";
import ItemCount from "./ItemCount"
import Item from "./Item"
import { CartContext } from "../layouts/CartContext";


const ItemDetail = ( {item} ) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }
/*hasta aca*/


    return(
     <div className="container">
        <div className="detalle-producto">
            <img src={Item.imagen} alt={item.titulo} />
            <div>
                <h3 className="nombre">{item.nombre}</h3>
                <p className="precio">${item.precio}</p>
                <p className="formato">{item.formato}</p>
                <p className="fps">{item.fps}</p>
                <p className="caracteristica">{item.caracteristica}</p>
               <ItemCount
                  cantidad={cantidad}
                  handleSumar={handleSumar}
                  handleRestar={handleRestar}
                  handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
               />   
               
            </div>
       </div>
    </div>
    )
}

export default ItemDetail