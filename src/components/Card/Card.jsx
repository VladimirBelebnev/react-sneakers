import { useContext } from "react";
import { Context } from "../../context";

import plus from "../../resources/plus.svg";
import unliked from "../../resources/heart-unliked.svg";
import liked from "../../resources/heart-liked.svg";
import checked from "../../resources/btn-checked.svg";
import "./Card.scss";

const Card = ({ data, removeButton }) => {
    const { onToggleCartOrFavorite } = useContext(Context);

    const { img, name, price, id, isCart, isFavorite } = data;

    return (
        <div className="item">
            {!removeButton ? (
                <button
                    onClick={() =>
                        onToggleCartOrFavorite(id, "isFavorite", !isFavorite)
                    }
                    className="item-btn item-favorite">
                    <img
                        src={isFavorite ? liked : unliked}
                        alt="unliked"
                    />
                </button>
            ) : null}
            <img
                className="item-img"
                src={`./img/sneakers/${img}`}
                alt={name}
            />
            <p className="item-name">{name}</p>
            <div className="item-info">
                <div className="item-price">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                {!removeButton ? (
                    <button
                        onClick={() => {
                            onToggleCartOrFavorite(id, "isCart", !isCart);
                        }}
                        className="item-btn">
                        <img
                            src={isCart ? checked : plus}
                            alt="add sneakers in cart"
                        />
                    </button>
                ) : null}
            </div>
        </div>
    );
};

export default Card;
