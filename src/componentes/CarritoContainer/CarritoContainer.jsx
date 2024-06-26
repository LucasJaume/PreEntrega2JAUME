import { useContext } from "react";
import CartContext from "../../contexts/CartContext/CartContext";
import ItemCarrito from "../ItemCarrito/ItemCarrito";
import "./CarritoContainer.css"
import { Link } from "react-router-dom";
export default function CarritoContainer() {
    const { cart, clearCart, cartTotal } = useContext(CartContext);

    return (
        <div className="carrito">
            <h3>Mis productos</h3>
            <div className="producto">
                {cart.length === 0 ? (
                    <h3>No se encuentran productos</h3>
                ) : (
                    cart.map((item) => {
                        return <ItemCarrito key={item.producto.id} item={item} />
                    })
                )}
            </div>
            <button onClick={clearCart}>Limpiar Carrito</button>
            <h4>Total: ${cartTotal}</h4>
            <Link className="comprar" to={"/checkout"}>
                Finalizar compra
            </Link>
        </div>
    );
}
