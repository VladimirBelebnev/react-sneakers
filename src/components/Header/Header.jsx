import { useContext } from "react";
import { Context } from "../../context";
import { Link } from "react-router-dom";

import "./Header.scss";
import logo from "../../resources/logo.png";
import cart from "../../resources/cart.svg";
import favorite from "../../resources/favorite.svg";
import account from "../../resources/account.svg";

const Header = () => {
    const { onToggleCart } = useContext(Context);

    return (
        <>
            <header className="header">
                <div className="header-left">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="logo"
                        />
                    </Link>
                    <div className="header-descr">
                        <h3>REACT SNEAKERS</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
                <ul className="header-right">
                    <li>
                        <button onClick={() => onToggleCart(true)}>
                            <img
                                src={cart}
                                alt="cart"
                            />
                            <span> руб.</span>
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
                            <Link to="/account">
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
