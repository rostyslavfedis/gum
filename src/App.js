import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

import MainPage from "./Components/MainPage/MainPage";

export default function App(props) {
    return (
        <Router>
            <Switch>
                <Route path={'/'} exact{...props} component={MainPage}/>
            </Switch>
        </Router>
    );
}
