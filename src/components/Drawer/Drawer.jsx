import arrow from "../../resource/arrow.svg";
import remove from "../../resource/btn-remove.svg";
import "./Drawer.scss";

const Drawer = ({ cartItems, onCloseCart }) => {
    return (
        <div className="drawer-overlay">
            <div className="drawer">
                <div className="drawer-header">
                    <h2 className="drawer-title">Корзина</h2>
                    <button
                        className="drawer-close"
                        onClick={() => onCloseCart(false)}>
                        <img
                            src={remove}
                            alt="close btn"
                        />
                    </button>
                </div>
                <div className="cart">
                    {cartItems.map((item, index) => (
                        <div
                            key={index}
                            className="cart-item">
                            <img
                                className="cart-preview"
                                src={`./img/sneakers/${item.img}`}
                                alt={item.name}
                            />
                            <div className="cart-wrap">
                                <p>{item.name}</p>
                                <strong>{item.price} руб.</strong>
                            </div>
                            <button className="cart-remove">
                                <img
                                    src={remove}
                                    alt="remove btn"
                                />
                            </button>
                        </div>
                    ))}
                </div>
                <div className="price">
                    <div className="price-block">
                        <p>Итого: </p>
                        <span></span>
                        <strong> руб.</strong>
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
