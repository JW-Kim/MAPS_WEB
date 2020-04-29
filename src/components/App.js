import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../components/home/home';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            	<div style={{overflow: 'hidden'}}>
                	<Redirect to={{pathname: '/home'}}/>
                	<Switch>
                    	<Route path="/home"><Home /></Route>
                	</Switch>
            	</div>
        );
    }
}

App.propTypes = {
    match: PropTypes.object
};

export default App;
