import {useCart} from "./CartContext";

export function CartList({items}){

    const {onRemove} = useCart();

    return(
        <div>
            {items.map((item, index) => (

            <div class="bg-green-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="grid grid-cols-3 gap-4 mt-4">
                <p class="text-center w-2/5 leading-loose rounded align-middle pt-0 h-8 bg-gray-100">{item.qty} </p>
                <div>
                   <p class="text-center leading-loose">{item.name} </p>
                   <p class="text-center leading-loose text-gray-700">Total producto(s): ${item.cost*item.qty} </p>
                </div>
                <div class="flex flex-col items-center">
                    <button class=" shadow bg-red-600 hover:bg-red-800 text-white focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded" onClick={() => onRemove(item)}> Eliminar </button>
                </div>
              </div>
              </div>
            ))}
        </div>
    )
}