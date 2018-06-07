import React, { Component } from 'react'

import './App.css'
import Header from './Components/Header'
import Featured from './Components/Featured'
import ContentRows from './Components/ContentRows'

export default class App extends Component {

  state = {
    activeFlyout: null
  }

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
    },
    {
      category: 'Vermeer',
      params: { q:'Jonannes Vermeer', type: 'painting', s: 'relevance' }
    },
    {
      category: '18th Century',
      params: { 'f.dating.period': 18, 'type': 'painting', 's': 'relevance' }
    },
    {
      category: '19th Century',
      params: { 'f.dating.period': 19, 'type': 'painting', 's': 'relevance' }
    },
    {
      category: '20th Century',
      params: { 'f.dating.period': 20, 'type': 'painting', 's': 'relevance' }
    }
  ]

  activateFlyout = (id) => {
    if (this.state.activeFlyout !== id)
      this.setState({
        activeFlyout: id
      })
  }

  render() {
    return (
      <div className="main">
        <Header />
        <Featured {...this.featured} />
        <ContentRows
          rows={this.queryObjects}
          active={this.state.activeFlyout}
          activateFlyout={this.activateFlyout} />
      </div>
    )
  }
}
