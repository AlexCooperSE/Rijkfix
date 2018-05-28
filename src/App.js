import React, { Component } from 'react'

import './App.css'
import RowContainer from './Components/RowContainer'

export default class App extends Component {

  queryObjects = [
    { q: 'rembrandt', s: 'relevance' },
    { toppieces: 'true' }
  ]

  makeQueryParameters = (obj) => {
    const encode = encodeURIComponent
    return Object.keys(obj)
      .map(key => `${encode(key)}=${encode(obj[key])}`)
      .join('&')
  }

  contentRows = this.queryObjects.map((queryObject,index) =>{
    console.log(this.makeQueryParameters(queryObject))
    return <RowContainer key={`row${index}`} query={this.makeQueryParameters(queryObject)} />
  })

  render() {
    return (
      <div className="main">
        {this.contentRows}
      </div>
    )
  }
}
