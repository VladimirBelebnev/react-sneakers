import { useContext } from "react";
import { Context } from "../../context";

import arrow from "../../resources/arrow.svg";

const DrawerPrice = () => {
    const { data, setOrdersFunc, totalPrice } = useContext(Context);

    let orderArray = data.filter((sneakers) => sneakers.isCart);

    return (
        <div className="price">
            <div className="price-block">
                <p>Итого: </p>
                <span></span>
                <strong>
                    {totalPrice % 1 ? totalPrice.toFixed(2) : totalPrice} руб.
                </strong>
            </div>
            <div className="price-block">
                <p>Налог 5%:</p>
                <span></span>
                <strong>{(totalPrice * 0.05).toFixed(2)} руб. </strong>
            </div>
            <button
                onClick={() => setOrdersFunc(orderArray)}
                className="btn">
                Оформить заказ
                <img
                    src={arrow}
                    alt="arrow"
                />
            </button>
        </div>
    );
};

export default DrawerPrice;
