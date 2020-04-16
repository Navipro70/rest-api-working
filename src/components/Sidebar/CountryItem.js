import React from "react";

export const CountryItem = ({name, countryHandler, id}) => {
    return (
        <li onClick={() => countryHandler(id)}>{name}</li>
    )
};