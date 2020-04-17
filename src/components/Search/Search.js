import React, {useState} from "react";
import classes from "./Search.module.css";
import {NavLink} from "react-router-dom";

export const Search = ({countries, chooseCountry}) => {
    const [inputField, setInputField] = useState("");
    const onTypeChanging = (e) => {
        setInputField(e.target.value)
    };

    const search = (array, text) => {
        return array.filter(item => {
            if (text === "") return false;
            return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1
        })
    };

    return (
        <div className={classes.search}>
            <h5>Search</h5>
            <div className={classes.input_search}>
                <input onChange={onTypeChanging} type="text" placeholder="Enter country name..." value={inputField}/>
                <ul>
                    {search(countries, inputField).map(item => <li key={item.name}>
                        <NavLink to={"/"} onClick={() => chooseCountry(item.name)}>{item.name}</NavLink>
                    </li>)}
                </ul>
            </div>
        </div>
    )
};