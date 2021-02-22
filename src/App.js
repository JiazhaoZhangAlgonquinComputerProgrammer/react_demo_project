import logo from './logo.svg';
import './App.css';
import InformationPanel from './components/InformationPanel';
import Navbar from "./components/Navbar";

import React, { Component } from 'react'
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <br/>
        <div className="container">
          {
            this.props.cities.map( (city) =>{
              return (<InformationPanel key={city.id} city={city.name} temperature={city.temperature} weather={city.weather}/>)
            })
          }
        </div>
        <p>{this.props.numberOfCities}</p>
    </div>
    )
  }
}

export default connect( (state)=>(
  {
    cities:state.cities,
    numberOfCities: state.cities.length
  }), {})(App)