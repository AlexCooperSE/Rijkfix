import React, { Component } from 'react'
import RowContainer from './RowContainer'
import Featured from './Featured'

class FlyoutContainer extends Component {

  state = {
    featured: null
  }

  activateFlyout = () => {
    this.props.activateFlyout(this.props.id)
  }

  onItemClick = (itemId) => {
    this.activateFlyout()
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
          this.state.featured !== null &&
          this.props.active === this.props.id
            ?
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

export default FlyoutContainer
