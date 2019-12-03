import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Navbar from "./component/navbar"
import Home from "./home"
import Contact from "./contact"

class index extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Simple React Router Redux</h1>
                    <Navbar context={this.context} />
                <hr/>

                <Route exact path="/" component={Home} />
                <Route path="/Home" component={Home} />
                <Route path="/Contact" component={Contact} />
                
            </React.Fragment>
        );
    }
}

export default index;