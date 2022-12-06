import { useState } from "react";

import Card from "../Card/Card";
import search from "../../resource/search.svg";
import remove from "../../resource/btn-remove.svg";
import "./Content.scss";

const Content = ({ data, onAddToCart }) => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <div className="content">
            <div className="content-wrap">
                <h1>
                    {searchValue
                        ? `Поиск по запросу: "${searchValue}"`
                        : "Все кроссовки"}
                </h1>
                <div className="content-input">
                    <input
                        value={searchValue}
                        onChange={(event) => setSearchValue(event.target.value)}
                        type="text"
                        placeholder="Поиск..."
                    />
                    <img
                        className="search"
                        src={search}
                        alt="search icon"
                    />
                    {searchValue ? (
                        <img
                            onClick={() => setSearchValue("")}
                            className="remove-value"
                            src={remove}
                            alt="remove icon"
                        />
                    ) : null}
                </div>
            </div>
            <div className="content-items">
                {data
                    .filter((data) =>
                        data.name
                            .toLowerCase()
                            .includes(searchValue.toLowerCase())
                    )
                    .map((data) => (
                        <Card
                            key={data.id}
                            data={data}
                            onAddToCart={onAddToCart}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Content;
