import React, { Component } from 'react';
import classes from './App.css';
import Car from './Car/Car';
import Radium, { StyleRoot } from 'radium';
import styled from 'styled-components';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  componentWillMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[App.js] getSnapshotBeforeUpdate');
    return {title: 'Hello World'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[App.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUpdate() {
    console.log('[App.js] componentWillUpdate');
  }

  componentWillUnmount() {
    console.log('[App.js] componentWillUnmount');
  }

  state = {
    cars: [
      { id: 'a1', name: 'Jaguar', color: 'blue' },
      { id: 'a2', name: 'BMW', color: 'black' },
      { id: 'a3', name: 'Audi', color: 'red' },
      { id: 'a4', name: 'Mercedes', color: 'white' }
    ],
    showCars: false
  }
  switchColorHandler = (newColor) => {
    this.setState({
      cars: [
        { name: 'Jaguar', color: newColor },
        { name: 'BMW', color: 'white' }
      ]
    });
  }
  colorChangedHandler = (event, index) => {
    //const carsPropertyCopy = Object.assign({}, this.state.cars[index]);
    const carsPropertyCopy = { ...this.state.cars[index] };
    carsPropertyCopy.color = event.target.value;
    const carsCopy = [...this.state.cars];
    carsCopy[index] = carsPropertyCopy;
    this.setState({
      cars: carsCopy
    });
  }
  toggleCarsHandler = () => {
    const shows = this.state.showCars;
    this.setState({
      showCars: !shows
    });
  }
  deleteCarHandler = (carIndex) => {
    //const carsCopy = this.state.cars.splice();
    const carsCopy = [...this.state.cars];
    carsCopy.splice(carIndex, 1);
    this.setState({
      cars: carsCopy
    });
  }
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }
    const StyledButton = styled.button`
      background-color: ${ props => props.alt ? 'red' : 'green' };
      color: white;
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;
      &:hover {
        background-color: ${ props => props.alt ? 'salmon' : 'lightgreen' };
        color: black;
      }
    `;
    //let assignedClasses;
    //assignedClasses = 'button-green';
    let btnClass = [classes.Button];
    let pclasses = [];
    if (this.state.cars.length <= 2) {
      pclasses.push('red');
    }
    if (this.state.cars.length <= 1) {
      pclasses.push('bold');
    }
    let cars;
    if (this.state.showCars === true) {
      cars = this.state.cars.map((car, index) => {
        return <Car
          key={car.id}
          name={car.name}
          color={car.color}
          click={this.deleteCarHandler.bind(this, index)}
          changed={(event) => this.colorChangedHandler(event, index)}
        />
      });
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
      btnClass.push(classes.Yellow);
      //assignedClasses.pop();
      //assignedClasses = assignedClasses.concat(' button-red');
      //assignedClasses = assignedClasses.concat(' button-blue');
    }
    else {
      cars = null;
    }
    console.log('[App.js] render');
    return (
        <div className={classes.App}>
          <h1>Our first component</h1>
          <p className={pclasses.join(' ')}>This is a paragraph to test classes.</p>
          {/* <button style={style} onClick={this.toggleCarsHandler}>Toggle Cars</button> */}
          {/* <StyledButton alt={this.state.showCars} onClick={this.toggleCarsHandler}>Toggle Cars</StyledButton> */}
          <button className={btnClass.join(' ')} onClick={this.toggleCarsHandler}>Toggle Cars</button>
          {cars}
        </div>
    );
  }
}

export default App;
