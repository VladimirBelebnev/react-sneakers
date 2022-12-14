import { useContext } from "react";
import { Context } from "../../context";

import Message from "../Message";
import DrawerCartItem from "./DrawerCartItem";
import DrawerPrice from "./DrawerPrice";

import remove from "../../resources/btn-remove.svg";
import "./Drawer.scss";

const Drawer = ({ opened }) => {
    const { data, orderID, isSend, setIsSend, onToggleCart } =
        useContext(Context);

    let showCart = false;

    data.forEach((sneakers) => {
        if (sneakers.isCart) showCart = true;
    });

    return (
        <div className={`drawer-overlay ${opened ? "cart-hidden" : ""}`}>
            <div className="drawer">
                <div className="drawer-header">
                    <h2 className="drawer-title">Корзина</h2>
                    <button
                        className="drawer-close"
                        onClick={() => {
                            onToggleCart(false);
                            setIsSend(false);
                        }}>
                        <img
                            src={remove}
                            alt="close btn"
                        />
                    </button>
                </div>
                {isSend ? (
                    <Message
                        img={"./img/success.png"}
                        title={"Заказ оформлен!"}
                        titleClass={"drawer-success"}
                        descr={`Ваш заказ #${orderID} скоро будет передан курьерской доставке.`}
                    />
                ) : null}
                {!showCart && !isSend ? (
                    <Message
                        img={"./img/box.png"}
                        title={"Корзина пустая"}
                        descr={
                            "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
                        }
                    />
                ) : null}
                <div className="cart">
                    {showCart
                        ? data
                              .filter((sneakers) => sneakers.isCart)
                              .map((data) => (
                                  <DrawerCartItem
                                      key={data.id}
                                      data={data}
                                  />
                              ))
                        : null}
                </div>
                {showCart ? <DrawerPrice /> : null}
            </div>
        </div>
    );
};

export default Drawer;
