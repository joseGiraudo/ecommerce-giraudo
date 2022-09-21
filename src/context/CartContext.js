import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [ cartItemsList, setCartItemsList ] = useState([]);
    const [ totalItems, setTotalItems ] = useState(0);

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
            itemExists.itemsPrice = itemExists.quantity * itemExists.price
        } else {
            const newProduct = {...product, quantity: cant, itemsPrice: cant * product.price}
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

    const getTotalItems = (cart) => {
        const newQ = cart.reduce((acc, item) => acc + item.quantity, 0);
        setTotalItems(newQ)
        return totalItems
    }

    const getTotalPrice = () => {
        const totalPriceProd = cartItemsList.reduce((acc, item) => acc + item.itemsPrice, 0);
        return totalPriceProd
    }

    return(
        <CartContext.Provider value={{
            cartItemsList,
            addToCart,
            removeCartItem,
            clearCart,
            getTotalItems,
            getTotalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}