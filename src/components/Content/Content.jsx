import Card from "../Card/Card";
import search from "../../resource/search.svg";
import "./Content.scss";

const Content = () => {
    return (
        <div className="content">
            <div className="content-wrap">
                <h1>Все кроссовки</h1>
                <div className="content-input">
                    <input
                        type="text"
                        placeholder="Поиск..."
                    />
                    <img
                        src={search}
                        alt="search icon"
                    />
                </div>
            </div>
            <div className="content-items">
                <Card />
            </div>
        </div>
    );
};

export default Content;
