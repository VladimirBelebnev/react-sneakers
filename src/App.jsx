import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Drawer from "./components/Drawer/Drawer";

const App = () => {
    const [data, setData] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);

    useEffect(() => {
        fetch("https://6389f629c5356b25a20dc4dd.mockapi.io/react-sneakers")
            .then((json) => json.json())
            .then((res) => setData(res))
            .catch((error) => console.error(error));
    }, []);

    const onOpenCart = (bool) => setCartOpened(bool);
    const onCloseCart = (bool) => setCartOpened(bool);

    const onAddToCart = (item) => {
        setCartItems((prev) => [...prev, item]);
    };

    return (
        <>
            {cartOpened ? (
                <Drawer
                    cartItems={cartItems}
                    onCloseCart={onCloseCart}
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
