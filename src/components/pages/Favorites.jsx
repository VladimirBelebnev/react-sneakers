import { useContext } from "react";
import { Context } from "../../context";

import Message from "../Message";
import Card from "../Card/Card";

const FavoritesPage = () => {
    const { data } = useContext(Context);

    let showFavorites = false;

    data.forEach((sneakers) => {
        if (sneakers.isFavorite) showFavorites = true;
    });

    return (
        <div className="content">
            <div className="content-wrap">
                <h1>Мои закладки</h1>
            </div>
            {!showFavorites && (
                <div className="message-wrap">
                    <Message
                        img={"./img/melancholy.png"}
                        title={"Закладок нет :("}
                        descr={"Вы ничего не добавляли в закладки"}
                    />
                </div>
            )}
            <div className="content-items">
                {showFavorites &&
                    data
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
