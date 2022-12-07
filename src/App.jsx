import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./pages/Home";
import FavoritesPage from "./pages/Favorites";
import Drawer from "./components/Drawer/Drawer";

const array = [
    {
        id: "1",
        name: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: "12 999",
        img: "1.jpg",
        isFavorite: false,
        isCart: false,
    },
    {
        id: "2",
        name: "Мужские Кроссовки Nike Air Max 270",
        price: "12 999",
        img: "2.jpg",
        isFavorite: false,
        isCart: false,
    },
    {
        id: "3",
        name: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: "8 499",
        img: "3.jpg",
        isFavorite: false,
        isCart: false,
    },
    {
        id: "4",
        name: "Кроссовки Puma X Aka Boku Future Rider",
        price: "8 999",
        img: "4.jpg",
        isFavorite: false,
        isCart: false,
    },
    {
        id: "5",
        name: "Мужские Кроссовки Under Armour Curry 8",
        price: "15 199",
        img: "5.jpg",
        isFavorite: false,
        isCart: false,
    },
    {
        id: "6",
        name: "Мужские Кроссовки Nike Kyrie 7",
        price: "11 299",
        img: "6.jpg",
        isFavorite: false,
        isCart: false,
    },
    {
        id: "7",
        name: "Мужские Кроссовки Jordan Air Jordan 11",
        price: "10 799",
        img: "7.jpg",
        isFavorite: false,
        isCart: false,
    },
    {
        id: "8",
        name: "Мужские Кроссовки Nike LeBron XVIII",
        price: "16 499",
        img: "8.jpg",
        isFavorite: false,
        isCart: false,
    },
    {
        id: "9",
        name: "Мужские Кроссовки Nike Lebron XVIII Low",
        price: "13 999",
        img: "9.jpg",
        isFavorite: false,
        isCart: false,
    },
    {
        id: "10",
        name: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: "8 499",
        img: "10.jpg",
        isFavorite: false,
        isCart: false,
    },
    {
        id: "11",
        name: "Кроссовки Puma X Aka Boku Future Rider",
        price: "8 999",
        img: "11.jpg",
        isFavorite: false,
        isCart: false,
    },
    {
        id: "12",
        name: "Мужские Кроссовки Nike Kyrie Flytrap IV",
        price: "11 299",
        img: "12.jpg",
        isFavorite: false,
        isCart: false,
    },
];

const App = () => {
    const [data, setData] = useState(array);
    const [cartOpened, setCartOpened] = useState(false);

    const onOpenOrCloseCart = (bool) => setCartOpened(bool);

    const onAddToCart = (id, value) => {
        const newData = data.map((sneakers) =>
            sneakers.id === id ? { ...sneakers, isCart: value } : sneakers
        );

        setData(newData);
    };

    const onRemoveFromCart = (id) => {
        const newData = data.map((sneakers) =>
            sneakers.id === id ? { ...sneakers, isCart: false } : sneakers
        );

        setData(newData);
    };

    const onAddToFavorites = (id, value) => {
        const newData = data.map((sneakers) =>
            sneakers.id === id ? { ...sneakers, isFavorite: value } : sneakers
        );

        setData(newData);
    };

    const onRemoveFromFavorites = (id) => {
        const newData = data.map((sneakers) =>
            sneakers.id === id ? { ...sneakers, isFavorite: false } : sneakers
        );

        setData(newData);
    };

    return (
        <>
            {cartOpened ? (
                <Drawer
                    data={data}
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
                            onAddToCart={onAddToCart}
                            onAddToFavorites={onAddToFavorites}
                        />
                    </Route>
                    {/* <Route
                        path="/favorites"
                        exact>
                        <FavoritesPage
                            data={data}
                            onRemoveFromCart={onRemoveFromCart}
                            // onRemoveFromFavorite={onRemoveFromFavorite}
                            onAddToCart={onAddToCart}
                            // onAddToFavorite={onAddToFavorite}
                        />
                    </Route> */}
                </Switch>
            </div>
        </>
    );
};

export default App;
