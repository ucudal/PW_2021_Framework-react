import {useCart} from "./CartContext";

export function CartList({items}){

    const {onRemove} = useCart();

    return(
        <div>
            {items.map((item, index) => (

                <form class="bg-green-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <p class="text-center leading-loose">{item.name}: </p>
                    <p class="text-center leading-loose">Cantidad: {item.qty} </p>
                    <p class="text-center leading-loose text-gray-700"> Precio unidad ${item.cost} </p>
                    <p class="text-center leading-loose text-gray-700">$ {item.cost*item.qty} </p>
                    <br></br>
                    <div class="md:w-1/2"></div>
                    <button class=" shadow bg-red-600 hover:bg-red-800 text-white focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded" onClick={() => onRemove(item)}> Eliminar del carrito </button>
                </form>
            ))}
        </div>
    )
}