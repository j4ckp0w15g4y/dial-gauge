import React, { Component } from 'react';
import './App.css'
import Dial from './components/Dial'
import SubmitForm from "./components/SubmitForm"



class App extends Component {
  constructor() {
    super();
    this.state = {
      rowOne: {
        currentValue: 76.5,
        lowerRange5Year: 75.7,
        maximum5Year: 80.46,
        minimum5Year: 75.1,
        upperRange5Year: 79.1,
        movement5Year: 4.28,
        movementPercentage5Year: 5.62
    },
    rowTwo: {
        currentValue: 85,
        lowerRange5Year: 78.55,
        maximum5Year: 86.86,
        minimum5Year: 77.54,
        upperRange5Year: 83.39,
        movement5Year: 9.32,
        movementPercentage5Year: 12.02
    },
    rowThree: {
        currentValue: 105.02,
        lowerRange5Year: 102.63,
        maximum5Year: 107.2,
        minimum5Year: 101.2,
        upperRange5Year: 105.92,
        movement5Year: 5.5,
        movementPercentage5Year: 5.41
    },
    certainRow: ''
    }
  }

  submitFunc = (e) => { 
    this.setState({
        certainRow: e.target.value
    })          
}


  render() {
    let [rowOne, rowTwo, rowThree] = [this.state.rowOne, this.state.rowTwo, this.state.rowThree]
    return (
      <div className="App">
        <Dial rowOne = {rowOne} rowTwo = {rowTwo} rowThree = {rowThree}/>
        <SubmitForm submitFunc={this.submitFunc} />

      </div>
    );
  }
}

// if a certain variable 

export default App;
