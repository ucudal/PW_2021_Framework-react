import {useCart} from "./CartContext";
import {CartList} from "./CartList";

export function Cart(){

    const {cartItems, cartTotal} = useCart();

    return(
        <div>
            <h1>Carrito de compras</h1>
            <p>Total: {cartTotal}</p>
            <CartList items={cartItems}/>
        </div>
    )
}