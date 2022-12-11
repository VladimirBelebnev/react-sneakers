import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context";

import prevArrow from "../resources/arrow-prev.svg";

const ButtonPrev = () => {
    const { onToggleCart, setIsSend } = useContext(Context);

    return (
        <Link
            to="/"
            onClick={() => {
                onToggleCart(false);
                setIsSend(false);
            }}
            className="btn prev-arrow">
            Вернуться назад
            <img
                src={prevArrow}
                alt="prev-arrow"
            />
        </Link>
    );
};

export default ButtonPrev;
