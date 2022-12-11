import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Context } from "../../context";
import { sneakersArray } from "../../data";

import Header from "../Header/Header";
import Drawer from "../Drawer/Drawer";
import HomePage from "../pages/Home";
import FavoritesPage from "../pages/Favorites";
import OrdersPage from "../pages/Orders";

const App = () => {
    const [data, setData] = useState([]);
    const [orders, setOrders] = useState(
        localStorage.getItem("ordersArray")
            ? JSON.parse(localStorage.getItem("ordersArray"))
            : []
    );
    const [orderID, setOrderID] = useState(
        localStorage.getItem("orderID")
            ? JSON.parse(localStorage.getItem("orderID"))
            : 0
    );
    const [cartOpened, setCartOpened] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isSend, setIsSend] = useState(false);

    // Иллюзия загрузи данных сервера после перезагрузки страницы.
    // Тут и дальше по коду -> (<Home />, <Favorites />, <Drawer />).
    useEffect(() => {
        setTimeout(() => {
            setDataFunc(
                localStorage.getItem("sneakersArray")
                    ? JSON.parse(localStorage.getItem("sneakersArray"))
                    : sneakersArray
            );
            setIsLoading(false);
        }, 2000);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setIsSend(false);
        }, 7000);
    }, [orders]);

    const setDataFunc = (sneakersArray) => {
        setData(sneakersArray);
        localStorage.setItem("sneakersArray", JSON.stringify(sneakersArray));
    };

    const setOrderIDFunc = () => {
        setOrderID((prev) => prev + 1);
        localStorage.setItem("orderID", JSON.stringify(orderID + 1));
    };

    const setOrdersFunc = (ordersArray) => {
        setIsSend(true);

        const newOrdersArray = ordersArray.map(
            (sneakers) =>
                sneakers && { ...sneakers, isCart: false, isFavorite: false }
        );

        setOrders(orders.concat(newOrdersArray));
        localStorage.setItem(
            "ordersArray",
            JSON.stringify(orders.concat(newOrdersArray))
        );

        setDataFunc(
            data.map((sneakers) => sneakers && { ...sneakers, isCart: false })
        );
        setOrderIDFunc();
    };

    const onToggleCart = (bool) => setCartOpened(bool);

    const onToggleCartOrFavorite = (id, key, value) => {
        const newData = data.map((sneakers) =>
            sneakers.id === id ? { ...sneakers, [key]: value } : sneakers
        );

        setDataFunc(newData);
    };

    const onRemoveFromCartOrFavorite = (id, key) => {
        const newData = data.map((sneakers) =>
            sneakers.id === id ? { ...sneakers, [key]: false } : sneakers
        );

        setDataFunc(newData);
    };

    return (
        <Context.Provider
            value={{
                data,
                orders,
                orderID,
                isLoading,
                isSend,
                setIsSend,
                cartOpened,
                onToggleCartOrFavorite,
                onRemoveFromCartOrFavorite,
                onToggleCart,
                setOrdersFunc,
            }}>
            <Drawer opened={cartOpened} />
            <div className="wrapper">
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={<HomePage />}
                    />
                    <Route
                        path="/favorites"
                        element={<FavoritesPage />}
                    />
                    <Route
                        path="/orders"
                        element={<OrdersPage />}
                    />
                </Routes>
            </div>
        </Context.Provider>
    );
};

export default App;
