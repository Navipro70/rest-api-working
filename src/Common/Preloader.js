import React from "react";
import "./Preloader.css";

export const Preloader = () => {
    return (
        <div className="site-container">
            <div className="loader">
                <div className="logo">
                    <div className="white"></div>
                    <div className="orange"></div>
                    <div className="red"></div>
                </div>
                <p>Loading</p>
            </div>
        </div>
    )
};