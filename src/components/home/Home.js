import React, { Component } from 'react';
import Map from '../map/Map';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>Home hi</h1>
                <Map />
            </div>
        );
    }

}

export default Home;
