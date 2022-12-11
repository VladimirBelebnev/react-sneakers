import { useContext } from "react";
import { useTotalPrice } from "../../hooks/hooks";
import { Context } from "../../context";
import { Link } from "react-router-dom";

import "./Header.scss";
import logo from "../../resources/logo.png";
import cart from "../../resources/cart.svg";
import favorite from "../../resources/favorite.svg";
import account from "../../resources/account.svg";

const Header = () => {
    const { data, onToggleCart } = useContext(Context);
    const totalPrice = useTotalPrice(data);

    return (
        <>
            <header className="header">
                <div className="header-left">
                    <Link to="/react-sneakers">
                        <img
                            src={logo}
                            alt="logo"
                        />
                    </Link>
                    <div className="header-descr">
                        <Link to="/react-sneakers">
                            <h3>REACT SNEAKERS</h3>
                            <p>Магазин лучших кроссовок</p>
                        </Link>
                    </div>
                </div>
                <ul className="header-right">
                    <li>
                        <button onClick={() => onToggleCart(true)}>
                            <img
                                src={cart}
                                alt="cart"
                            />
                            <span>
                                {totalPrice % 1
                                    ? totalPrice.toFixed(2)
                                    : totalPrice}{" "}
                                руб.
                            </span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <Link to="/favorites">
                                <img
                                    src={favorite}
                                    alt="favorites"
                                />
                            </Link>
                        </button>
                    </li>
                    <li>
                        <button>
                            <Link to="/orders">
                                <img
                                    src={account}
                                    alt="account"
                                />
                            </Link>
                        </button>
                    </li>
                </ul>
            </header>
            <span className="line"></span>
        </>
    );
};

export default Header;
