import { useState } from "react";

import plus from "../../resource/plus.svg";
import unliked from "../../resource/heart-unliked.svg";
import liked from "../../resource/heart-liked.svg";
import checked from "../../resource/btn-checked.svg";
import "./Card.scss";

const Card = ({ data, onAddToCart }) => {
    const { img, name, price } = data;

    const [isFavorite, setIsFavorite] = useState(false);
    const [isCart, setIsCart] = useState(false);

    return (
        <div className="item">
            <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="item-btn item-favorite">
                <img
                    src={isFavorite ? liked : unliked}
                    alt="unliked"
                />
            </button>
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
                <button
                    onClick={() => {
                        setIsCart(!isCart);
                        onAddToCart({ name, img, price });
                    }}
                    className="item-btn">
                    <img
                        src={isCart ? checked : plus}
                        alt="add sneakers in cart"
                    />
                </button>
            </div>
        </div>
    );
};

export default Card;
