import "./Header.scss";
import logo from "../../resource/logo.png";
import cart from "../../resource/cart.svg";
import favorite from "../../resource/favorite.svg";
import account from "../../resource/account.svg";

const Header = ({ onOpenCart }) => {
    return (
        <>
            <header className="header">
                <div className="header-left">
                    <img
                        src={logo}
                        alt="logo"
                    />
                    <div className="header-descr">
                        <h3>REACT SNEAKERS</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
                <ul className="header-right">
                    <li>
                        <button onClick={() => onOpenCart(true)}>
                            <img
                                src={cart}
                                alt="cart"
                            />
                            <span>1205 руб.</span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <img
                                src={favorite}
                                alt="favorite"
                            />
                        </button>
                    </li>
                    <li>
                        <button>
                            <img
                                src={account}
                                alt="account"
                            />
                        </button>
                    </li>
                </ul>
            </header>
            <span className="line"></span>
        </>
    );
};

export default Header;
