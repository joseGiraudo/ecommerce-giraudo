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
            <div className="btn-group pt-5">
                <button type="button" className="btn btn-outline-danger btn-sm" onClick={restarClick} >-</button>
                <h5 className="p-2">{contador}</h5>
                <button type="button" className="btn btn-outline-success btn-sm" onClick={sumarClick} >+</button>
            </div>
                <hr/>
                <button type="button" className="btn btn-outline-primary" onClick={() => (agregarProducto(contador))} >Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;