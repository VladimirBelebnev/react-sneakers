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
    const [cartOpened, setCartOpened] = useState(false);
    // Иллюзия загрузи данных сервера после перезагрузки страницы.
    // Тут и дальше по коду -> (<Home />, <Favorites />).
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setDataFunc(
                localStorage.getItem("sneakersArray")
                    ? JSON.parse(localStorage.getItem("sneakersArray"))
                    : []
            );
            setIsLoading(false);
        }, 2000);
    }, []);

    const setDataFunc = (sneakersArray) => {
        setData(sneakersArray);
        localStorage.setItem("sneakersArray", JSON.stringify(sneakersArray));
    };

    const totalPrice = data
        .filter((sneakers) => sneakers.isCart)
        .reduce((sum, sneakers) => sneakers.price + sum, 0);

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
                isLoading,
                totalPrice,
                cartOpened,
                onToggleCartOrFavorite,
                onRemoveFromCartOrFavorite,
                onToggleCart,
            }}>
            {cartOpened ? <Drawer /> : null}
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
