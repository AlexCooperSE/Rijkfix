import React, { Component } from 'react'

import './App.css'
import Featured from './Components/Featured'
import FlyoutContainer from './Components/FlyoutContainer'

export default class App extends Component {

  featuredList = [
    { item: 'SK-C-5', pos: 'center' },
    { item: 'SK-A-2344', pos: 'center' },
    { item: 'SK-A-4', pos: 'top' },
    { item: 'SK-A-3262', pos: 'center' },
    { item: 'BK-16676', pos: 'center' }
  ]

  featured = this.featuredList[
    Math.floor(Math.random() * Object.keys(this.featuredList).length)
  ]

  queryObjects = [
    {
      category: 'Top Items',
      params: { type: 'painting', toppieces: 'true' }
    },
    {
      category: 'Rembrandt',
      params: { q: 'Rembrandt van Rijn', type: 'painting', s: 'relevance' }
    }
    // ,
    // {
    //   category: 'Vermeer',
    //   params: { q:'Jonannes Vermeer', type: 'painting', s: 'relevance' }
    // },
    // {
    //   category: '18th Century',
    //   params: { 'f.dating.period': 18, 'type': 'painting', 's': 'relevance' }
    // },
    // {
    //   category: '19th Century',
    //   params: { 'f.dating.period': 19, 'type': 'painting', 's': 'relevance' }
    // },
    // {
    //   category: '20th Century',
    //   params: { 'f.dating.period': 20, 'type': 'painting', 's': 'relevance' }
    // }
  ]

  makeQueryParameters = (obj) => {
    const encode = encodeURIComponent
    return Object.keys(obj)
      .map(key => `${encode(key)}=${encode(obj[key])}`)
      .join('&')
  }

  contentRows = this.queryObjects.map((queryObject,index) => {
    console.log(this.makeQueryParameters(queryObject))
    return <FlyoutContainer
      key={`flyoutContainer${index}`}
      id={`flyoutContainer${index}`}
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
