import React from "react";
import {NavLink} from "react-router-dom";

export const CountryItem = ({name, countryHandler, id}) => {
    let positionY;
    let timer;
    const onScrollWrapper = () => {
        positionY = window.pageYOffset;
        onScrollTop(positionY)
    };
    const onScrollTop = (positionY) => {
        if (positionY > 0) {
            window.scrollTo(0, positionY);
            positionY -= 100;
            timer = setTimeout(() => onScrollTop(positionY), 10)
        }
        else {
            clearTimeout(timer);
            window.scrollTo(0, 0);
        }
    };
    return (
        <NavLink onClick={onScrollWrapper} to={'/'}><li onClick={() => countryHandler(id)}>{name}</li></NavLink>

    )
};