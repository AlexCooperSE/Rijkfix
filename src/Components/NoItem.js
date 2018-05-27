import React from 'react'

const NoItem = (props) =>
  <div className="item-error">
    <div className="item-error-image" style={{
      'backgroundImage': 'url(https://upload.wikimedia.org/wikipedia/commons/8/87/Magnifying_glass_icon_mgx2.svg)'
    }}></div>
    <div className="item-error-label">{props.message}</div>
  </div>

export default NoItem
