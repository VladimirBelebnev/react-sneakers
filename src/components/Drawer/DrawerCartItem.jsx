import { useContext } from "react";
import { Context } from "../../context";

import remove from "../../resources/btn-remove.svg";

const DrawerCartItem = ({ data }) => {
    const { onRemoveFromCartOrFavorite } = useContext(Context);

    const { id, name, price, img } = data;

    return (
        <div className="cart-item">
            <img
                className="cart-preview"
                src={`./img/sneakers/${img}`}
                alt={name}
            />
            <div className="cart-wrap">
                <p>{name}</p>
                <strong>{price} руб.</strong>
            </div>
            <button
                onClick={() => onRemoveFromCartOrFavorite(id, "isCart")}
                className="cart-remove">
                <img
                    src={remove}
                    alt="remove btn"
                />
            </button>
        </div>
    );
};

export default DrawerCartItem;
