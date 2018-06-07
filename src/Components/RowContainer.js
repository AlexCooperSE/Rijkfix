import React, { Component } from 'react'
import Slider from './Slider'

class RowContainer extends Component {

  onItemClick = (itemId) => {
    this.props.onItemClick(itemId)
  }

  render() {
    return (
      <div className="row-container-wrapper">
        <div className="row-label">
          {this.props.category}
        </div>
        <div className="row-container">
          <div className="row">
            <Slider
              key={`slider${this.props.index}`}
              query={this.props.query}
              onItemClick={this.onItemClick} />
          </div>
        </div>
      </div>
    )
  }
}

export default RowContainer
