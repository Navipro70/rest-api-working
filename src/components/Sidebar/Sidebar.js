import React, {useState} from "react";
import classes from "./Sidebar.module.css";
import Button from "@material-ui/core/Button";
import {Preloader} from "../../Common/Preloader";

const Sidebar = ({countryData, isFetching}) => {
    const [loadMoreCounter, setLoadMore] = useState(20);
    const loadMore = () => {
        setLoadMore((prevLoadMoreCount) => prevLoadMoreCount + 20)
    };
    return (
        <ul className={classes.sidebar}>
            {isFetching && <Preloader />}
            {countryData.slice(0, loadMoreCounter).map(country => <li key={country.name}>{country.name}</li>)}
            <li className={classes.loadButton}>
                <Button variant="contained" color="primary" onClick={loadMore} >Load more</Button>
            </li>
        </ul>
    )
};

export default Sidebar;