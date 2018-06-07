import React, { Component } from 'react'

import FlyoutContainer from './FlyoutContainer'

export default class ContentRows extends Component {

  activateFlyout = (id) => {
    this.props.activateFlyout(id)
  }

  makeQueryParameters = (obj) => {
    const encode = encodeURIComponent
    return Object.keys(obj)
      .map(key => `${encode(key)}=${encode(obj[key])}`)
      .join('&')
  }

  render() {
    return (
      this.props.rows.map((queryObject,index) => {
        return <FlyoutContainer
          key={`flyoutContainer${index}`}
          id={`flyoutContainer${index}`}
          category={queryObject.category}
          query={this.makeQueryParameters(queryObject.params)}
          activateFlyout={this.activateFlyout}
          active={this.props.active} />
      })
    )
  }
}
