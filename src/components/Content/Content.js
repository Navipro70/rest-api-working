import React from "react";
import classes from "./Content.module.css";
import {NoCountry} from "./NoCountry";

export const Content = ({country}) => {
    if (country === null) return <NoCountry />; // СДЕЛАТЬ КРАСИВУЮ ЗАГЛУШКУ ИЛИ ПОСТАВИТЬ ДЕФОЛТНУЮ СТРАНУ
    const commonLiStyle = {marginLeft: "-20px"};// СТЕЛИЗОВАТЬ ВСЁ С ПОМОЩЬЮ UI MATERIAL ПОМЕНЯТЬ ФОН ДОБАВИТЬ ПОИСК
                                                //ДОБАВИТЬ KEY В МАССИВ ДОБАВИТЬ ОБРАБОТКУ ОШИБКИ
                                                // Убрать все перерисовки в header
    return (
        <div className={classes.main_div}>
            <h4>{country.name}</h4>
            <div>
                Capital: {country.capital}
            </div>
            <ul>
                <li style={commonLiStyle}>Alt spellings:</li>
                {country.altSpellings.map(item => <li key={item}>{item}</li>)}
                <li style={commonLiStyle}>Relevance: {country.relevance}</li>
                <li style={commonLiStyle}>Region: {country.region}</li>
                <li style={commonLiStyle}>Subregion: {country.subregion}</li>
                <li style={commonLiStyle}>Translations:</li>
                {Object.entries(country.translations).map(([key, value]) => <li key={Math.random().toString()}>{key}: {value}</li>)}
                <li style={commonLiStyle}>Population: {country.population} people</li>
                <li style={commonLiStyle}>Latitude: {country.latlng[0]}</li>
                <li style={commonLiStyle}>Longitude: {country.latlng[1]}</li>
                <li style={commonLiStyle}>Area: {country.area} square kilometers</li>
                <li style={commonLiStyle}>Gini coefficient: {country.gini}</li>
                <li style={commonLiStyle}>Timezones: </li>
                {country.timezones.map(item => <li key={item}>{item}</li>)}
                <li style={commonLiStyle}>Calling codes: </li>
                {country.callingCodes.map(item => <li key={item.toString()}>+{item}</li>)}
                <li style={commonLiStyle}>Top level domains: </li>
                {country.topLevelDomain.map(item => <li key={item + Math.random()}>{item}</li>)}
                <li style={commonLiStyle}>Alpha code 2: {country.alpha2Code}</li>
                <li style={commonLiStyle}>Alpha code 3: {country.alpha3Code}</li>
                <li style={commonLiStyle}>Currencies: </li>
                {country.currencies.map(item => <li key={item + Math.random()}>{item}</li>)}
                <li style={commonLiStyle}>Official languages: </li>
                {country.languages.map(item => <li key={item + Math.random()}>{item}</li>)}
            </ul>
        </div>
    )
};

