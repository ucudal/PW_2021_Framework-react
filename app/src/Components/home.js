import {useCart} from "./CartContext";

export function Home({productos}){

    const {onAdd,} = useCart();

    return(
        <div>
            <h1>Tienda!</h1>
            {productos.map((item, index) => (
                <div style={{display: "flex", flexDirection: "row", margin: "1em"}}>
                    <p>{item.name}: </p>
                    <p> $ {item.cost}</p>
                    <button onClick={() => onAdd(item)}>Agregar a carrito</button>
                </div>
            ))}
        </div>
    )
}