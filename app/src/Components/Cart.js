import {useCart} from "./CartContext";
import {CartList} from "./CartList";

export function Cart(){

    const {cartItems, cartTotal} = useCart();

    return(
        <div>
            <h1 class='font-bold text-2xl mt-4'>Carrito de compras</h1>
            <br/>
            <div class="font-bold grid grid-cols-3 gap-4 mt-4 bg-gray-300">
                <p class="text-center leading-loose rounded align-middle">Cantidad</p>
                <p class="text-center leading-loose">Nombre </p>
                <br></br>
              </div>

            <CartList items={cartItems}/>
            <p class="text-right font-bold">Total: ${cartTotal}</p>
        </div>
    )
}