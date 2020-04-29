import React, {Component} from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import GMoney from './components/gMoney/GMoney';
import Home from './components/home/home.jsx';

class Routes extends Component {
    render() {
        const authenticated = true;
        return (
        	<React.Fragment>
				<Switch>
					<Route path="/g-money" component={GMoney} {...this.props} />
                    <Route path="/home" component={Home} {...this.props} />
				</Switch>
			</React.Fragment>
        );
    }
}

export default Routes;
