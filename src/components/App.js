import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import GMoney from '../components/gMoney/GMoney';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div style={{overflow: 'hidden'}}>
                <Redirect to={{pathname: '/g-money'}}/>
                <Switch>
                    <Route path="/g-money"><GMoney /></Route>
                </Switch>
            </div>
        );
    }
}

App.propTypes = {
    match: PropTypes.object
};

export default App;
