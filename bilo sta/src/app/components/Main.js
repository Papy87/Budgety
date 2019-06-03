import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import Peoples from "../components/Peoples"
import Feed from "./Feed"
import Profile from "./Profile"
import SinglePost from "../components/SinglePost"
import SingleProfile from "./SingleProfilePage"
import LogAndRegister from "./bootstrapModals/LogAndRegTabs"

class Main extends Component {
    // constructor(props) {
    //     super(props)

    // }

    render() {
        return (

            <Switch>
                <Route exact path="/singleprofile/:id" component={SingleProfile}></Route>
                <Route exact path="/singlepost/:id" component={SinglePost}></Route>
                <Route exact path="/peoples/" component={Peoples} />
                <Route exact path="/profile/" component={Profile} />
                <Route exact path="/feed/" component={Feed} />
                <Route exact path="/" component={LogAndRegister} />
            </Switch>

        )
    }
}

export default Main