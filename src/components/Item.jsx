import React from "react";
import { Link } from "react-router-dom";

const Item =  ({producto}) => {
    return (
        <div className="producto"> 
      
      <img src={producto.imagen} />
        <div>
            
            <h2>{producto.nombre}</h2>
            <p>{producto.formato}</p>
            <p>{producto.fps}</p>
            <p>{producto.caracteristica}</p>
            <p>${producto.precio}</p>
            <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
            </div>
        </div>
    )
}

export default Item;