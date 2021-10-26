import {useCart} from "./CartContext";

export function CartList({items}){

    const {onRemove} = useCart();

    return(
        <div>
            {items.map((item, index) => (
                <div style={{display: "flex", flexDirection: "row", margin: "1em"}}>
                    <p>{item.qty} - - </p>
                    <p>{item.name}: </p>
                    <p>$ {item.cost} - </p>
                    <button onClick={() => onRemove(item)}>x</button>
                </div>
            ))}
        </div>
    )
}