import Card from "../Card/Card";
import search from "../../resource/search.svg";
import "./Content.scss";

const Content = ({ array }) => {
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
                {array.map((data, index) => (
                    <Card
                        key={index}
                        data={data}
                    />
                ))}
            </div>
        </div>
    );
};

export default Content;
