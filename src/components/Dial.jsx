import React, { Component } from 'react';
import { ReactComponent as Icon } from '../GaugeOne.svg';

import '../App.css';

class Dial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowValue: this.props.rowValue
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.rowValue !== prevProps.rowValue) {
            this.setState({
                rowValue: this.props.rowValue
            })
        }
    }




    render() {
        let { rowValue } = this.state;
        return (
            <div className="Dial">
                <div className="svg-container">
                    <Icon className="dial-svg" />
                    <div id="minimum">{rowValue.minimum5Year}</div>
                    <div id="lower">{rowValue.lowerRange5Year}</div>
                    <div id="current">{rowValue.currentValue}</div>
                    <div id="upper">{rowValue.upperRange5Year}</div>
                    <div id="maximum">{rowValue.maximum5Year}</div>
                </div>
            </div>
        );
    }
}

export default Dial;