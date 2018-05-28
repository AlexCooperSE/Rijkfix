import React from 'react'

const Item = (props) =>
  <div className="item">
    <div className="item-preview" style={{ 'backgroundImage': `url(${props.img})` }}></div>
    <div className="item-label">{props.artist}<br />{props.title}</div>
  </div>

export default Item
