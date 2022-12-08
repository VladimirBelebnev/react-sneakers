import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context";

import prevArrow from "../resources/arrow-prev.svg";

const ButtonPrev = () => {
    const { onToggleCart } = useContext(Context);

    return (
        <Link
            to="/"
            onClick={() => onToggleCart(false)}
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
