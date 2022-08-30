import React, { useState } from 'react';

const ItemCount = ({stock, initial, agregarProducto}) => {
    const [ contador, setContador ] = useState(initial);

    const sumarClick = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }
    const restarClick = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    return (
        <div>
            <p>Numero de clicks {contador}</p>
            <button onClick={sumarClick} >+ 1</button>
            <button onClick={restarClick} >- 1</button>
            <hr/>
            <button onClick={() => (agregarProducto(contador))} >Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;