import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Switch, Route } from "react-router-dom"
import HeaderLog from "../headerComponents/HeaderLog"
import HeaderFeed from "../headerComponents/HeaderFeed"

class Header extends Component {

    render() {
        return (

            <Switch>
                <Route exact path="/singleprofile/:id" component={HeaderFeed}></Route>
                <Route exact path="/singlepost/:id" component={HeaderFeed}></Route>
                <Route exact path="/peoples/" component={HeaderFeed} />
                <Route exact path="/profile/" component={HeaderFeed} />
                <Route exact path="/feed" component={HeaderFeed} />
                <Route path="/" component={HeaderLog} />
            </Switch>
        )
    }
}

export default Header
