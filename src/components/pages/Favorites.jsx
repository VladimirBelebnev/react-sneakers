import { useContext } from "react";
import { Context } from "../../context";

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
            <div className="content-items">
                {showFavorites ? (
                    data
                        .filter((sneakers) => sneakers.isFavorite)
                        .map((data) => (
                            <Card
                                key={data.id}
                                data={data}
                            />
                        ))
                ) : (
                    <em>Здесь будут ваши кроссовки</em>
                )}
            </div>
        </div>
    );
};

export default FavoritesPage;
