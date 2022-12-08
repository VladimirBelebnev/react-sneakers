import { useState, useContext } from "react";
import { Context } from "../../context";

import Card from "../Card/Card";
import Sceleton from "../Sceleton";
import search from "../../resources/search.svg";
import remove from "../../resources/btn-remove.svg";

const HomePage = () => {
    const [searchValue, setSearchValue] = useState("");
    const { data, isLoading } = useContext(Context);

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
                {isLoading
                    ? [...Array(12)].map(() => (
                          <Sceleton key={Math.random(0, 100)} />
                      ))
                    : data
                          .filter((data) =>
                              data.name
                                  .toLowerCase()
                                  .includes(searchValue.toLowerCase())
                          )
                          .map((data) => (
                              <Card
                                  key={data.id}
                                  data={data}
                              />
                          ))}
            </div>
        </div>
    );
};

export default HomePage;
