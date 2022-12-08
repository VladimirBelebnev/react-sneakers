import { useContext } from "react";
import { Context } from "../../context";

import DrawerMessage from "./DrawerMessage";
import DrawerCartItem from "./DrawerCartItem";
import DrawerPrice from "./DrawerPrice";

import remove from "../../resources/btn-remove.svg";
import "./Drawer.scss";

const Drawer = () => {
    const { data, onToggleCart } = useContext(Context);

    let showCart = false;

    data.forEach((sneakers) => {
        if (sneakers.isCart) showCart = true;
    });

    return (
        <div className="drawer-overlay">
            <div className="drawer">
                <div className="drawer-header">
                    <h2 className="drawer-title">Корзина</h2>
                    <button
                        className="drawer-close"
                        onClick={() => onToggleCart(false)}>
                        <img
                            src={remove}
                            alt="close btn"
                        />
                    </button>
                </div>
                {!showCart ? <DrawerMessage /> : null}
                <div className="cart">
                    {showCart &&
                        data
                            .filter((sneakers) => sneakers.isCart)
                            .map((data) => (
                                <DrawerCartItem
                                    key={data.id}
                                    data={data}
                                />
                            ))}
                </div>
                {showCart ? <DrawerPrice /> : null}
            </div>
        </div>
    );
};

export default Drawer;
