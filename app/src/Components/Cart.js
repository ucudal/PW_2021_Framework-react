import {useCart} from "./CartContext";
import {CartList} from "./CartList";

export function Cart(){

    const {cartItems, cartTotal} = useCart();

    return(
        <div>
            <h1 class='font-bold text-2xl mt-4'>Carrito de compras</h1>
            <br/>
            <CartList items={cartItems}/>
            <p class="text-right font-bold">Total: {cartTotal}</p>
        </div>
    )
}