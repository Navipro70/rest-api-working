import React, {Component} from "react";
import classes from "./Header.module.css";
import Grid from "@material-ui/core/Grid";
import {NavLink} from "react-router-dom";


export default class Header extends Component {
    render() {
        return <header className={classes.app_header}>
            <Grid container spacing={4}>
                <Grid item xs={2}>
                    <p style={{marginLeft: "10px"}}>Country API</p>
                </Grid>
                <Grid item xs={10} className={classes.navbar}>
                    <NavLink to="/">Countries</NavLink>
                    <NavLink to="/search">Search</NavLink>
                    <NavLink to="/FAQ">FAQ</NavLink>
                </Grid>
            </Grid>
        </header>
    }
};