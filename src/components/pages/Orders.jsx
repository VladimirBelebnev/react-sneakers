import { useContext } from "react";
import { Context } from "../../context";

import Message from "../Message";
import Card from "../Card/Card";

const OrdersPage = () => {
    const { orders } = useContext(Context);

    let showOrders = false;

    return (
        <div className="content">
            <div className="content-wrap">
                <h1>Мои закладки</h1>
            </div>
            {!showOrders && orders.length === 0 ? (
                <div className="message-wrap">
                    <Message
                        img={"./img/sadness.png"}
                        title={"Товаров не найдено :("}
                        descr={"Вы еще ничего не купили"}
                    />
                </div>
            ) : null}
            <div className="content-items">
                {orders.map((data) => (
                    <Card
                        removeButton="true"
                        key={data.id}
                        data={data}
                    />
                ))}
            </div>
        </div>
    );
};

export default OrdersPage;
