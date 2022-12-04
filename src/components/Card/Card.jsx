import { useState } from "react";

import plus from "../../resource/plus.svg";
import unliked from "../../resource/heart-unliked.svg";
import liked from "../../resource/heart-liked.svg";
import checked from "../../resource/btn-checked.svg";
import "./Card.scss";

const Card = ({ data }) => {
    const [heart, setHeart] = useState(false);
    const [cart, setCart] = useState(false);
    const { img, name, price } = data;

    return (
        <div className="item">
            <button
                onClick={() => setHeart((heart) => !heart)}
                className="item-btn item-favorite">
                <img
                    src={heart ? liked : unliked}
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
                    onClick={() => setCart((cart) => !cart)}
                    className="item-btn">
                    <img
                        src={cart ? checked : plus}
                        alt="add sneakers"
                    />
                </button>
            </div>
        </div>
    );
};

export default Card;
