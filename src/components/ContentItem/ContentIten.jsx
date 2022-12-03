import plus from "../../resource/plus.svg";
import sneakers from "../../resource/sneakers/1.jpg";
import "./ContentItem.scss";

const ContentItem = () => {
    return (
        <div className="item">
            <img src={sneakers} alt="sneaker" />
            <p className="item-name">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="item-info">
                <div className="item-price">
                    <span>Цена:</span>
                    <b>12 999 руб.</b>
                </div>
                <button className="item-btn">
                    <img src={plus} alt="add sneakers" />
                </button>
            </div>
        </div>
    );
};

export default ContentItem;