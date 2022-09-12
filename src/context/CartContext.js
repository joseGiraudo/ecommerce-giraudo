import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [ cartItemsList, setCartItemsList ] = useState([]);
    //const productList = products;

    /* const isInCart = (idItem) => {
        if (cartItemsList.find(item => item.id === idItem)) {
            item.quantity = item.quantity + 
        }
    } */

    const addToCart = (product, cant) => {
        const itemExists = cartItemsList.find(item => item.id === product.id);
        if (itemExists) {
            itemExists.quantity = itemExists.quantity + cant
        } else {
            const newProduct = {...product, quantity: cant}
            const newList = [...cartItemsList, newProduct];
            setCartItemsList(newList);
        }
    }

    const removeCartItem = (idItem) => {
        const newList = [...cartItemsList.filter(item => item.id !== idItem )];
        setCartItemsList(newList);
    }

    const clearCart = () => {
        setCartItemsList([]);
    }


    return(
        <CartContext.Provider value={{
            cartItemsList,
            addToCart,
            removeCartItem,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}