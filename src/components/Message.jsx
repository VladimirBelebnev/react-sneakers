import ButtonPrev from "./ButtonPrev";

const DrawerMessage = ({ img, title, titleClass = "", descr }) => {
    return (
        <div className="drawer-info">
            <img
                className="drawer-img"
                src={img}
                alt="box img"
            />
            <h4 className={`drawer-cart-title ${titleClass}`}>{title}</h4>
            <p className="drawer-cart-descr">{descr}</p>
            <ButtonPrev />
        </div>
    );
};

export default DrawerMessage;
