// import Card from "../components/Card/Card";

const FavoritesPage = ({
    data,
    onRemoveFromCart,
    onRemoveFromFavorite,
    onAddToCart,
    onAddToFavorite,
}) => {
    return (
        <div className="content">
            <div className="content-wrap">
                <h1>Мои закладки</h1>
            </div>
            <div className="content-items">
                Здесь будут ваши кроссовки
                {/* {data.map((data) => (
                    <Card
                        key={data.id}
                        data={data}
                        onRemoveFromFavorite={onRemoveFromFavorite}
                        onAddToFavorite={onAddToFavorite}
                        onAddToCart={onAddToCart}
                        onRemoveFromCart={onRemoveFromCart}
                    />
                ))} */}
            </div>
        </div>
    );
};

export default FavoritesPage;
