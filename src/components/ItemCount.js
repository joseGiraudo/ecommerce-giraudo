import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <div className="btn-group pt-2">
                <button type="button" className="btn btn-outline-danger btn-sm" onClick={restarClick} >-</button>
                <h5 className="p-2">{contador}</h5>
                <button type="button" className="btn btn-outline-success btn-sm" onClick={sumarClick} >+</button>
            </div>
            <hr/>
            <div>
                <button type="button" className="btn btn-outline-primary w-50" onClick={() => (agregarProducto(parseInt(contador)))} >Agregar al carrito</button>
                <Link type="button" to="/cart" className="btn btn-primary w-50">Ver Carrito</Link>
            </div>    
        </div>
    )
}

export default ItemCount;