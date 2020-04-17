import React from "react";

export const FAQ = props => {
    return (
        <>
            <h4 style={{textAlign: "center"}}>FAQ</h4>
            <ol>
                <li>How to use country page? Just choose a country from sidebar and after you get all information about
                    it on content page
                </li>
                <li>How to use search page? Start writing country name and you get all list with countries, filtered
                    according your search panel,
                    then you can choose right country and get information about it
                </li>
            </ol>
            <p style={{marginLeft: "20px"}}>
                This app was made thanks to
                <a style={{textDecoration: "none", color: "black"}}
                   href="https://rapidapi.com/"> rapidapi.com
                </a> and open countries API
            </p>
        </>
    )
};