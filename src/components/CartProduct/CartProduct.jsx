import classes from "./CartProduct.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


function CartProduct(props) {
    
    const deleteItemFromCart = () => {
        const canDelete = window.confirm("Are you sure you want to delete the product?")

        if (canDelete) {
            props.deleteItem(props.item)
        }
    };

    return (
        <div className={classes.cartItem}>
            <Link to={`/details/` + props.item.id}>
                <img src={`/assets/coffeeImage/${props.item.image}`} alt={props.item.image} />
            </Link>

            <div className={classes.cartItemDetails}>
                <h2>{props.item.price} lei</h2>

                <h1>{props.item.name}</h1>

                <div className={classes.aboutItem}>
                    <h3>Country:<span>{props.item.country}</span></h3>
                    <h3>Type:<span>{props.item.category}</span></h3>
                    <h3>Weight:<span>{props.item.weight}</span></h3>
                </div>

                <div className={classes.cartItemQuantity}>
                    <button onClick={() => props.decreaseQuantity(props.item)}>-</button>
                    <h3>{props.item.quantity}</h3>
                    <button onClick={() => props.addItem(props.item)}>+</button>
                </div>

                <button className={classes.saveForLater} onClick={() => props.saveForLater(props.item)}>
                    Save for later
                </button>
            </div>

            <button onClick={() => deleteItemFromCart()} className={classes.deleteItem}>
                <FontAwesomeIcon className={classes.deleteIcon} icon="fa-regular fa-circle-xmark" />
            </button>
        </div>
    )
}

export default CartProduct;
