import {useCart} from "./CartContext";

export function Home({productos}){

    const {onAdd,} = useCart();

    return(
        <div>
            <h1 class="font-400 text-2xl md:text-3xl text-center font-bold">Tienda!</h1>
            <div class="grid grid-cols-2 gap-4 mt-4">
            {productos.map((item, index) => (
                <form class="bg-blue-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <p class="text-center leading-loose">{item.name} </p>
                    <p class="text-center leading-loose text-gray-700">$ {item.cost} </p>
                    <br></br>
                    <div class="flex flex-col items-center">
                        <button class="shadow bg-green-600 hover:bg-green-800 text-white focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded" onClick={() => onAdd(item)}> Agregar </button>
                    </div>
                </form>
            ))}
            </div>
        </div>
    )
}