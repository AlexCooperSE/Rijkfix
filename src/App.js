import React, { Component } from 'react'

import './App.css'
import Slider from './Components/Slider'

export default class App extends Component {

  // placeholder method
  log = (object) => {
    console.log(object)
  }

  render() {
    return (
      <div className="main">
        <div className="row-container">
          <div className="row">
            <Slider query="rembrandt" />
          </div>
        </div>
      </div>
    )
  }
}
