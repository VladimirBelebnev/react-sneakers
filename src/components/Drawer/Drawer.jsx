import arrow from "../../resource/arrow.svg";
import prevArrow from "../../resource/arrow-prev.svg";
import remove from "../../resource/btn-remove.svg";
import "./Drawer.scss";

const Drawer = ({ cartItems, onOpenOrCloseCart, onRemoveFromCart }) => {
    return (
        <div className="drawer-overlay">
            <div className="drawer">
                <div className="drawer-header">
                    <h2 className="drawer-title">Корзина</h2>
                    <button
                        className="drawer-close"
                        onClick={() => onOpenOrCloseCart(false)}>
                        <img
                            src={remove}
                            alt="close btn"
                        />
                    </button>
                </div>
                {cartItems.length === 0 ? (
                    <DrawerInfo onOpenOrCloseCart={onOpenOrCloseCart} />
                ) : (
                    <DrawerCart
                        cartItems={cartItems}
                        onRemoveFromCart={onRemoveFromCart}
                    />
                )}
            </div>
        </div>
    );
};

const DrawerInfo = ({ onOpenOrCloseCart }) => {
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
                onClick={() => onOpenOrCloseCart(false)}
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

const DrawerCart = ({ cartItems, onRemoveFromCart }) => {
    return (
        <>
            <div className="cart">
                {cartItems.map(({ id, name, price, img }) => (
                    <div
                        key={id}
                        className="cart-item">
                        <img
                            className="cart-preview"
                            src={`./img/sneakers/${img}`}
                            alt={name}
                        />
                        <div className="cart-wrap">
                            <p>{name}</p>
                            <strong>{price} руб.</strong>
                        </div>
                        <button
                            onClick={() => onRemoveFromCart(id)}
                            className="cart-remove">
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
        </>
    );
};

export default Drawer;
