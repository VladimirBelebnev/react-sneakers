import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Context } from "../../context";
import { sneakersArray } from "../../data";

import Header from "../Header/Header";
import HomePage from "../pages/Home";
import FavoritesPage from "../pages/Favorites";
import Drawer from "../Drawer/Drawer";

const App = () => {
    const [data, setData] = useState(sneakersArray);
    const [cartOpened, setCartOpened] = useState(false);

    const onToggleCart = (bool) => setCartOpened(bool);

    const onToggleCartOrFavorite = (id, key, value) => {
        const newData = data.map((sneakers) =>
            sneakers.id === id ? { ...sneakers, [key]: value } : sneakers
        );

        setData(newData);
    };

    const onRemoveFromCartOrFavorite = (id, key) => {
        const newData = data.map((sneakers) =>
            sneakers.id === id ? { ...sneakers, [key]: false } : sneakers
        );

        setData(newData);
    };

    return (
        <Context.Provider
            value={{
                data,
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
                        element={<HomePage />}></Route>
                    <Route
                        path="/favorites"
                        element={<FavoritesPage />}></Route>
                </Routes>
            </div>
        </Context.Provider>
    );
};

export default App;
