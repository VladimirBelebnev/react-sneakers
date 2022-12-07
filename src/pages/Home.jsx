import { useState } from "react";

import Card from "../components/Card/Card";
import search from "../resource/search.svg";
import remove from "../resource/btn-remove.svg";

const HomePage = ({
    data,
    onRemoveFromCart,
    onRemoveFromFavorite,
    onAddToCart,
    onAddToFavorite,
}) => {
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
                            onRemoveFromFavorite={onRemoveFromFavorite}
                            onAddToFavorite={onAddToFavorite}
                            onAddToCart={onAddToCart}
                            onRemoveFromCart={onRemoveFromCart}
                        />
                    ))}
            </div>
        </div>
    );
};

export default HomePage;