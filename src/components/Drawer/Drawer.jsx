import sneakers from "../../resource/sneakers/1.jpg";
import arrow from "../../resource/arrow.svg";
import remove from "../../resource/btn-remove.svg";
import "./Drawer.scss";

const Drawer = () => {
    return (
        <div className="drawer-overlay">
            <div className="drawer">
                <div className="drawer-header">
                    <h2 className="drawer-title">Корзина</h2>
                    <img
                        className="drawer-close"
                        src={remove}
                        alt="close btn"
                    />
                </div>
                <div className="cart">
                    <div className="cart-item">
                        <img
                            className="cart-preview"
                            src={sneakers}
                            alt="sneakers"
                        />
                        <div className="cart-wrap">
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <strong>12 999 руб.</strong>
                        </div>
                        <button className="cart-remove">
                            <img
                                src={remove}
                                alt="remove btn"
                            />
                        </button>
                    </div>
                </div>
                <div className="price">
                    <div className="price-block">
                        <p>Итого: </p>
                        <span></span>
                        <strong>21 498 руб.</strong>
                    </div>
                    <div className="price-block">
                        <p>Налог 5%:</p>
                        <span></span>
                        <strong>1074 руб. </strong>
                    </div>
                    <button className="btn">
                        Оформить заказ
                        <img
                            src={arrow}
                            alt="arrow"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Drawer;
