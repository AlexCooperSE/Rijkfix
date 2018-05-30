import React, { Component } from 'react'

class Item extends Component {

  node = React.createRef()

  handleClick = (e) => {
    e.preventDefault()
    this.node.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' })
    this.props.onItemClick(e.target.id)
  }

  render() {
    return (
      <div className="item">
        <div id={this.props.objectId}
          className="item-preview"
          style={{ 'backgroundImage': `url(${this.props.img})` }}
          ref={this.node}
          onClick={this.handleClick}>
        </div>
        <div className="item-label">{this.props.artist}<br />{this.props.title}</div>
      </div>
    )
  }
}
export default Item
