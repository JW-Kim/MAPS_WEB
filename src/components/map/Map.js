import React, { Component } from 'react';

class Map extends Component {
    constructor(props) {
        super(props);
        this.naver = window.naver;
        this.state = {};
    }

    componentDidMount() {
        const mapOption = {
            center: new this.naver.maps.LatLng(37, 127),
            zoom: 15
        };
        const curMap  = new this.naver.maps.Map('naverMap', mapOption);
        console.log('curMap>>>', curMap);
    }

    render() {
        return (
            <div>
                <span>this is map</span>
                <div id="naverMap" style={{width: '400px', height: '400px'}} />
            </div>
        );
    }
}

export default Map;
