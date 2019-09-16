import React, { Component } from 'react';
import { ReactComponent as Icon } from '../GaugeOne.svg';

import '../App.css';

let chosenRow;

class Dial extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            currentValue: 0,
            lowerRange5Year: 0,
            maximum5Year: 0,
            minimum5Year: 0,
            upperRange5Year: 0,
            movement5Year: 0,
            movementPercentage5Year: 0
        }
    }

    // What do I need to do? 
    // set state dependent on a submit form
    // e.g. if e.target.value === 'RowOne': this.setState({
    //       
    // })


    render() {
        return (
            <div className="Dial">
                <div className="svg-container">
                    <Icon className="dial-svg" />
                    <div id="minimum">{this.state.minimum5Year}</div>
                    <div id="lower">{this.state.lowerRange5Year}</div>
                    <div id="current">{this.state.currentValue}</div>
                    <div id="upper">{this.state.upperRange5Year}</div>
                    <div id="maximum">{this.state.maximum5Year}</div>

                    {/* <div id="lower">{this.state.lowerRange5Year}</div>
                <div id="current">{this.state.currentValue}</div>
                <div id="upper">{this.state.upperRange5Year}</div>
                <div id="maximum">{this.state.maximum5Year}</div> */}
                </div>
            </div>
        );
    }
}

export default Dial;