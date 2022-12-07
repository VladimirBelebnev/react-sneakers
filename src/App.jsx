import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header/Header";
import HomePage from "./pages/Home";
import FavoritesPage from "./pages/Favorites";
import Drawer from "./components/Drawer/Drawer";

const App = () => {
    const [data, setData] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favoriteItems, setFavoriteItems] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);

    useEffect(() => {
        axios
            .get("https://6389f629c5356b25a20dc4dd.mockapi.io/react-sneakers")
            .then((res) => setData(res.data))
            .catch((error) => console.error(error));
        axios
            .get(
                "https://6389f629c5356b25a20dc4dd.mockapi.io/react-sneakers-cart"
            )
            .then((res) => setCartItems(res.data))
            .catch((error) => console.error(error));
    }, []);

    const onOpenOrCloseCart = (bool) => setCartOpened(bool);

    const onAddToCart = (itemObj) => {
        axios.post(
            "https://6389f629c5356b25a20dc4dd.mockapi.io/react-sneakers-cart",
            itemObj
        );

        setCartItems((prev) => [...prev, itemObj]);
    };

    const onRemoveFromCart = (id) => {
        axios.delete(
            `https://6389f629c5356b25a20dc4dd.mockapi.io/react-sneakers-cart/${id}`
        );

        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const onAddToFavorite = (itemObj) => {
        axios.post(
            "https://6389f629c5356b25a20dc4dd.mockapi.io/favorite",
            itemObj
        );

        setFavoriteItems((prev) => [...prev, itemObj]);
    };

    const onRemoveFromFavorite = (id) => {
        axios.delete(
            `https://6389f629c5356b25a20dc4dd.mockapi.io/react-sneakers-cart/${id}`
        );

        setFavoriteItems((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <>
            {cartOpened ? (
                <Drawer
                    cartItems={cartItems}
                    onOpenOrCloseCart={onOpenOrCloseCart}
                    onRemoveFromCart={onRemoveFromCart}
                />
            ) : null}
            <div className="wrapper">
                <Header onOpenOrCloseCart={onOpenOrCloseCart} />
                <Switch>
                    <Route
                        path="/"
                        exact>
                        <HomePage
                            data={data}
                            onRemoveFromCart={onRemoveFromCart}
                            onRemoveFromFavorite={onRemoveFromFavorite}
                            onAddToCart={onAddToCart}
                            onAddToFavorite={onAddToFavorite}
                        />
                    </Route>
                    <Route
                        path="/favorites"
                        exact>
                        <FavoritesPage
                            data={data}
                            onRemoveFromCart={onRemoveFromCart}
                            onRemoveFromFavorite={onRemoveFromFavorite}
                            onAddToCart={onAddToCart}
                            onAddToFavorite={onAddToFavorite}
                        />
                    </Route>
                </Switch>
            </div>
        </>
    );
};

export default App;
