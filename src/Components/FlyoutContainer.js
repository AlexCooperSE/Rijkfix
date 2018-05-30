import React, { Component } from 'react'
import RowContainer from './RowContainer'
import Featured from './Featured'
import debugRender from 'react-render-debugger'

class FlyoutContainer extends Component {

  state = {
    featured: null
  }

  onItemClick = (itemId) => {
    this.setState({
      featured: { item: itemId, pos: 'center' }
    })
  }

  render() {
    return (
      <div className="flyout-container">
        <RowContainer
          key={this.props.index}
          category={this.props.category}
          query={this.props.query}
          onItemClick={this.onItemClick} />
        {
          this.state.featured !== null ?
            <div className="flyout">
              <Featured {...this.state.featured} />
            </div>
            :
            <div></div>
        }
      </div>
    )
  }
}

export default debugRender(FlyoutContainer)
