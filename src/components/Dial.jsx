import React, { Component } from 'react';
import { ReactComponent as Icon } from '../GaugeOne.svg';

import '../App.css';

class Dial extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            currentValue: this.props.rowValue.currentValue,
            lowerRange5Year: this.props.rowValue.lowerRange5Year,
            maximum5Year: this.props.rowValue.maximum5Year,
            minimum5Year: this.props.rowValue.minimum5Year,
            upperRange5Year: this.props.rowValue.upperRange5Year,
            movement5Year: this.props.rowValue.movement5Year,
            movementPercentage5Year: this.props.rowValue.movementPercentage5Year
        }
    }

 


    render() {
        console.log(this.props.rowValue)
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