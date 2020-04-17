import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {Content} from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";
import {Route, Switch} from "react-router-dom";
import {countriesApi} from "./API/countriesAPI";


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: [], isFetching: true, currentCountry: null};
    }

    componentDidMount() {
        countriesApi.getAllCountries()
            .then(response => this.setState({data: response, isFetching: false}))
    }

    chooseCountry = (id) => {
        this.setState({currentCountry: this.state.data[id]})
    }

    render() {
        const {data, isFetching, currentCountry} = this.state;
        return (
            <Container maxWidth="md">
                <Header/>
                <Grid container spacing={1} alignItems="stretch" direction="row">
                    <Grid item xs={3}>
                        <Sidebar isFetching={isFetching} countryData={data} chooseCountry={this.chooseCountry}/>
                    </Grid>
                    <Grid item xs={9}>
                        <div className="content">
                            <Switch>
                                <Route exact path="/" render={() => <Content country={currentCountry}/>}/>
                                <Route path="/search" render={() => <Content/>}/>
                                <Route path="/countries" render={() => <Content/>}/>
                                <Route render={() => <div>404 Not found</div>}/>
                            </Switch>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}