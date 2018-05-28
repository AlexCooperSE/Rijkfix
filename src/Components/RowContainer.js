import React from 'react'
import Slider from './Slider'

const RowContainer = (props) =>
  <div className="row-container">
    <div className="row-label">
      {props.category}
    </div>
    <div className="row">
      <Slider key={`slider${props.index}`} query={props.query} />
    </div>
  </div>


export default RowContainer
