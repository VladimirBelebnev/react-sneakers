import { useContext } from "react";
import { Context } from "../../context";

import Message from "../Message";
import Card from "../Card/Card";
import Sceleton from "../Sceleton";

const OrdersPage = () => {
    const { orders, isLoading } = useContext(Context);

    const generateID = () => Math.floor(Math.random() * (100000 - 0 + 1)) + 0;

    return (
        <div className="content">
            <div className="content-wrap">
                <h1>Мои заказы</h1>
            </div>
            {!isLoading && orders.length === 0 ? (
                <div className="message-wrap">
                    <Message
                        img={"./img/sadness.png"}
                        title={"Товаров не найдено :("}
                        descr={"Вы еще ничего не купили"}
                    />
                </div>
            ) : null}
            <div className="content-items">
                {isLoading
                    ? [...Array(12)].map(() => <Sceleton key={generateID()} />)
                    : orders.map((sneakers) => (
                          <Card
                              removeButton="true"
                              key={generateID()}
                              data={sneakers}
                          />
                      ))}
            </div>
        </div>
    );
};

export default OrdersPage;
