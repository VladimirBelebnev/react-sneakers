import "./Header.scss";
import logo from "../../resource/logo.png";
import basket from "../../resource/basket.svg";
import heart from "../../resource/heart.svg";
import account from "../../resource/account.svg";

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <img src={logo} alt="logo" />
                <div className="header-descr">
                    <h3>REACT SNEAKERS</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="header-right">
                <li>
                    <img src={basket} alt="basket" />
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img src={heart} alt="heart" />
                </li>
                <li>
                    <img src={account} alt="account" />
                </li>
            </ul>
        </header>
    );
};

export default Header;