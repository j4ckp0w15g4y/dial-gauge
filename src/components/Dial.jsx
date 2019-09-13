import React, { Component } from 'react';
import { ReactComponent as Icon } from '../GaugeOne.svg';
import '../App.css';

class Dial extends Component {
    constructor() {
        super();
        this.state = {
            currentValue: 0,
            lowerRange5Year: 0,
            maximum5Year: 0,
            mean5Year: 0,
            minimum5Year: 0,
            upperRange5Year: 0,
            movement5Year: 0,
            movementPercentage5Year: 0
        }
    }


    render() {
        return (
            <div className="Dial">
                <div id="minimum">{this.state.minimum5Year}</div>
                {/* <div id="lower">{this.state.lowerRange5Year}</div>
                <div id="current">{this.state.currentValue}</div>
                <div id="upper">{this.state.upperRange5Year}</div>
                <div id="maximum">{this.state.maximum5Year}</div> */}
                <Icon className="dial-svg"/>
            </div>
        );
    }
}

export default Dial;