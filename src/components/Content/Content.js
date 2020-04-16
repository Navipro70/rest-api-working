import React from "react";
import classes from "./Content.module.css";

export const Content = ({contry}) =>  {
        if (contry === null) return <div>Hello!</div>; // СДЕЛАТЬ КРАСИВУЮ ЗАГЛУШКУ ИЛИ ПОСТАВИТЬ ДЕФОЛТНУЮ СТРАНУ
                                                        // СТЕЛИЗОВАТЬ ВСЁ С ПОМОЩЬЮ UI MATERIAL ПОМЕНЯТЬ ФОН ДОБАВИТЬ ПОИСК
                                                        //ДОБАВИТЬ KEY В МАССИВ
        return (
            <div>
                {contry.name}
                {contry.capital}
                {contry.altSpellings.map(item => <div>{item}</div>)}
                {contry.name}
                {contry.name}
            </div>
        )
};

