import React, {useState} from "react";
import classes from "./Sidebar.module.css";
import Button from "@material-ui/core/Button";
import {Preloader} from "../../Common/Preloader";
import {CountryItem} from "./CountryItem";

const Sidebar = ({countryData, isFetching, chooseCountry}) => {
    const [loadMoreCounter, setLoadMore] = useState(20);
    const loadMore = () => {
        setLoadMore((prevLoadMoreCount) => prevLoadMoreCount + 20)
    };
    return (
        <ul className={classes.sidebar}>
            {isFetching && <Preloader/>}
            {countryData.slice(0, loadMoreCounter)
                .map((country) => <CountryItem countryHandler={chooseCountry}
                                               key={country.name} {...country} />)}

            <div className={classes.loadButton}>
                <Button variant="contained" color="primary" onClick={loadMore}>Load more</Button>
            </div>
        </ul>
    )
};

export default React.memo(Sidebar);