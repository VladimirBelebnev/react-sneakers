import plus from "../../resource/plus.svg";
import unliked from "../../resource/heart-unliked.svg";
import liked from "../../resource/heart-liked.svg";
import checked from "../../resource/btn-checked.svg";
import "./Card.scss";

const Card = ({ data, onAddToCart, onAddToFavorites }) => {
    const { img, name, price, id, isCart, isFavorite } = data;

    return (
        <div className="item">
            <button
                onClick={() => onAddToFavorites(id, !isFavorite)}
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
                        onAddToCart(id, !isCart);
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
