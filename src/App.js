import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {Content} from "./components/Content/Content";
import {Search} from "./components/Search/Search";
import {FAQ} from "./components/FAQ/FAQ";
import Sidebar from "./components/Sidebar/Sidebar";
import {Route, Switch} from "react-router-dom";
import {countriesApi} from "./API/countriesAPI";


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isFetching: true,
            currentCountry: null,
            error: null
        };
    }

    componentDidMount() {
        countriesApi.getAllCountries()
            .then(response => this.setState({data: response, isFetching: false}))
            .catch(err => this.setState({isFetching: false, error: err}))
    }

    chooseCountry = (countryName) => {
        this.setState({currentCountry: this.state.data.filter(item => item.name === countryName)[0]})
    }

    render() {
        const {data, isFetching, currentCountry, error} = this.state;
        return (
            <Container maxWidth="md">
                <Header/>
                <Grid container spacing={1} alignItems="stretch" direction="row">
                    <Grid item xs={3}>
                        <Sidebar error={error} isFetching={isFetching} countryData={data} chooseCountry={this.chooseCountry}/>
                    </Grid>
                    <Grid item xs={9}>
                        <div className="content">
                            <Switch>
                                <Route exact path="/" render={() => <Content country={currentCountry}/>}/>
                                <Route path="/search" render={() => <Search countries={data} chooseCountry={this.chooseCountry}/>}/>
                                <Route path="/FAQ" render={() => <FAQ/>}/>
                                <Route render={() => <div>404 Not found</div>}/>
                            </Switch>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}