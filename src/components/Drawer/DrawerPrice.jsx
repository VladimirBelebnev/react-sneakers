import arrow from "../../resources/arrow.svg";

const DrawerPrice = () => {
    return (
        <div className="price">
            <div className="price-block">
                <p>Итого: </p>
                <span></span>
                <strong> руб.</strong>
            </div>
            <div className="price-block">
                <p>Налог 5%:</p>
                <span></span>
                <strong>1074 руб. </strong>
            </div>
            <button className="btn">
                Оформить заказ
                <img
                    src={arrow}
                    alt="arrow"
                />
            </button>
        </div>
    );
};

export default DrawerPrice;
