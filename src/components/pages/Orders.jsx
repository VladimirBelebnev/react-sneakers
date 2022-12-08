import { useContext } from "react";
import { Context } from "../../context";

import Message from "../Message";
import Card from "../Card/Card";

const OrdersPage = () => {
    let showOrders = false;

    return (
        <div className="content">
            <div className="content-wrap">
                <h1>Мои закладки</h1>
            </div>
            {!showOrders && (
                <div className="message-wrap">
                    <Message
                        img={"./img/sadness.png"}
                        title={"Товаров не найдено :("}
                        descr={"Вы еще ничего не купили"}
                    />
                </div>
            )}
            <div className="content-items"></div>
        </div>
    );
};

export default OrdersPage;
