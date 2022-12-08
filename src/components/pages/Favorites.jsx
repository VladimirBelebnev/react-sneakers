import { useContext } from "react";
import { Context } from "../../context";

import Message from "../Message";
import Sceleton from "../Sceleton";
import Card from "../Card/Card";

const FavoritesPage = () => {
    const { data, isLoading } = useContext(Context);

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
                    ? [...Array(4)].map(() => (
                          <Sceleton key={Math.random(0, 100)} />
                      ))
                    : data
                          .filter((sneakers) => sneakers.isFavorite)
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

export default FavoritesPage;
