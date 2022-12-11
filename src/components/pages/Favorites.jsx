import { useContext } from "react";
import { Context } from "../../context";

import Message from "../Message";
import Sceleton from "../Sceleton";
import Card from "../Card/Card";

const FavoritesPage = () => {
    const { data, isLoading } = useContext(Context);

    const generateID = () => Math.floor(Math.random() * (100000 - 0 + 1)) + 0;

    let showFavorites = false;

    data.forEach((sneakers) => {
        if (sneakers.isFavorite) showFavorites = true;
    });

    return (
        <div className="content">
            <div className="content-wrap">
                <h1>Мои закладки</h1>
            </div>
            {!showFavorites && !isLoading ? (
                <div className="message-wrap">
                    <Message
                        img={"./img/melancholy.png"}
                        title={"Закладок нет :("}
                        descr={"Вы ничего не добавляли в закладки"}
                    />
                </div>
            ) : null}
            <div className="content-items">
                {isLoading
                    ? [...Array(12)].map(() => <Sceleton key={generateID()} />)
                    : data
                          .filter((sneakers) => sneakers.isFavorite)
                          .map((sneakers) => (
                              <Card
                                  key={sneakers.id}
                                  data={sneakers}
                              />
                          ))}
            </div>
        </div>
    );
};

export default FavoritesPage;
