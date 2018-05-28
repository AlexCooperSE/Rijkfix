import React, { Component } from 'react'

import './App.css'
import Featured from './Components/Featured'
import RowContainer from './Components/RowContainer'

export default class App extends Component {

  featuredList = [
    { item: 'SK-C-5', pos: 'center' },
    { item: 'SK-A-2344', pos: 'center' },
    { item: 'SK-A-4', pos: 'top' },
    { item: 'SK-A-3262', pos: 'center' }
  ]

  featured = this.featuredList[Math.floor(Math.random() * 4)]
  featured = this.featuredList[0]

  queryObjects = [
    {
      category: 'Top Items',
      params: { toppieces: 'true' }
    },
    {
      category: 'Rembrandt',
      params: { q: 'rembrandt', s: 'relevance' }
    }
  ]

  makeQueryParameters = (obj) => {
    const encode = encodeURIComponent
    return Object.keys(obj)
      .map(key => `${encode(key)}=${encode(obj[key])}`)
      .join('&')
  }

  contentRows = this.queryObjects.map((queryObject,index) =>{
    console.log(this.makeQueryParameters(queryObject))
    return <RowContainer
      key={`row${index}`}
      category={queryObject.category}
      query={this.makeQueryParameters(queryObject.params)} />
  })

  render() {
    return (
      <div className="main">
        <div className="header"></div>
        <Featured {...this.featured} />
        {this.contentRows}
      </div>
    )
  }
}
