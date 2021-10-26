import React, {createContext, useContext, useEffect, useState} from 'react';

const CartContext = React.createContext();

export function useCart(){
    return useContext(CartContext);
}

export function CartProvider({children}) {

    const [isCartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState();
    let localCart = localStorage.getItem("cart");

    //this is called on component mount
    useEffect(() => {
        //turn it into js
        localCart = JSON.parse(localCart);
        console.log(localCart)
        //load persisted cart into state if it exists
        if (localCart) {
            console.log(localCart)
            setCartItems(localCart)
        }

    }, []) //the empty array ensures useEffect only runs once

    useEffect(() => {
        let stringCart = JSON.stringify(cartItems);
        localStorage.setItem("cart", stringCart)
    }, [cartItems])

    const onAdd = (product) => {
        console.log(product)
        const exist = cartItems.find((x) => x.name === product.name);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.name === product.name ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
        console.log(cartItems)
    };

    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.name === product.name);
        if(exist){
            if (exist.qty === 1) {
                setCartItems(cartItems.filter((x) => x.name !== product.name));
            }else {
                setCartItems(
                    cartItems.map((x) =>
                        x.name === product.name ? { ...exist, qty: exist.qty - 1 } : x
                    )
                );
            }
        }
    };

    const onDelete = (product) => {
        setCartItems(cartItems.filter((x) => x.query !== product.query));
    }

    const openCart = () => {
        setCartOpen(true)
    };

    const closeCart = () => {
        setCartOpen(false);
    }

    useEffect(() => {
        let total = 0
        cartItems.map((item, index) => {
            total = total + (item.cost * item.qty)
        })
        console.log(total)
        setCartTotal(total)
    }, [cartItems])

    const isProductOnCart = (product) => {
        for(let i = 0; i < cartItems.length; i++){
            if(cartItems[0].query === product.query){
                return true
            }
        }
        return false
    }

    const value ={
        isCartOpen,
        openCart,
        closeCart,
        cartItems,
        onAdd,
        onRemove,
        cartTotal,
        isProductOnCart,
        onDelete,
        setCartItems
    }

    return(
        <CartContext.Provider value={value}>
            { children }
        </CartContext.Provider>
    );
}