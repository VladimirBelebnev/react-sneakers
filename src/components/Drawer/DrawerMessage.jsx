import { useContext } from "react";
import { Context } from "../../context";

import prevArrow from "../../resources/arrow-prev.svg";

const DrawerMessage = () => {
    const { onToggleCart } = useContext(Context);

    return (
        <div className="drawer-info">
            <img
                className="drawer-img"
                src="./img/box.png"
                alt="box img"
            />
            <h4 className="drawer-cart-title">Корзина пустая</h4>
            <p className="drawer-cart-descr">
                Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button
                onClick={() => onToggleCart(false)}
                className="btn prev-arrow">
                Вернуться назад
                <img
                    src={prevArrow}
                    alt="prev-arrow"
                />
            </button>
        </div>
    );
};

export default DrawerMessage;
