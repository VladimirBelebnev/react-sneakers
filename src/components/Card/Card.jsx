import plus from "../../resource/plus.svg";
import unliked from "../../resource/heart-unliked.svg";
import liked from "../../resource/heart-liked.svg";
import checked from "../../resource/btn-checked.svg";
import sneakers from "../../resource/sneakers/1.jpg";
import "./Card.scss";

const Card = () => {
    return (
        <div className="item">
            <button className="item-btn item-favorite">
                <img
                    src={unliked}
                    alt="unliked"
                />
            </button>
            <img
                src={sneakers}
                alt="sneakers"
            />
            <p className="item-name">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="item-info">
                <div className="item-price">
                    <span>Цена:</span>
                    <b>12 999 руб.</b>
                </div>
                <button className="item-btn">
                    <img
                        src={plus}
                        alt="add sneakers"
                    />
                </button>
            </div>
        </div>
    );
};

export default Card;
