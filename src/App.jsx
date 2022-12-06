import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Drawer from "./components/Drawer/Drawer";

const App = () => {
    const [data, setData] = useState([]);
    const [cartItems, setCartItems] = useState([]);
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

    const onOpenCart = (bool) => setCartOpened(bool);
    const onCloseCart = (bool) => setCartOpened(bool);

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

    return (
        <>
            {cartOpened ? (
                <Drawer
                    cartItems={cartItems}
                    onCloseCart={onCloseCart}
                    onRemoveFromCart={onRemoveFromCart}
                />
            ) : null}
            <div className="wrapper">
                <Header onOpenCart={onOpenCart} />
                <Content
                    data={data}
                    onAddToCart={onAddToCart}
                />
            </div>
        </>
    );
};

export default App;
