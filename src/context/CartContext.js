import React, { useState } from 'react';
import { products } from '../helper/helper';

export const cartContext = React.createContext();

const cartProvider = () => {
    const [ cartItems, setCartItems ] = useState([]);
    const productList = products;
    return(
        <cartContext.Provider value={productList}>

        </cartContext.Provider>
    )
}