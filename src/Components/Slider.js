import React, { Component } from 'react'
import axios from 'axios'

import Item from './Item'
import NoItem from './NoItem'

class Slider extends Component {

    state = {
      objects: [],
      loading: true
    }

    apiKey = process.env.REACT_APP_RIJKS_API_KEY;

    componentDidMount() {
      this.getObjects(this.props.query)
    }

    onItemClick = (itemId) => {
      this.props.onItemClick(itemId)
    }

    getObjects = (query) => {
      const baseUri = 'https://www.rijksmuseum.nl/api/en/collection'
      const defaults = 'format=json&imgonly=true'
      const requestUri = `${baseUri}?key=${this.apiKey}&${defaults}&${query}`
      axios.get(requestUri)
        .then(response => {
          const objects = response.data.artObjects.map(artObject => {
            const data = {
              id:     artObject.objectNumber,
              title:  artObject.title,
              artist: artObject.principalOrFirstMaker,
              img:    artObject.webImage.url
            }
            return data
          })
          this.setState({
            objects,
            loading: false
          })
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error)
          this.setState({
            objects: [],
            loading: false
          })
        })
    }

    render() {
      let items = [<NoItem message="No results." key="noitem"/>]
      const objects = this.state.objects

      if (objects.length)
        items = objects.map(object =>
          <Item
            key={object.id}
            objectId={object.id}
            title={object.title}
            artist={object.artist}
            img={object.img}
            onItemClick={this.onItemClick}
          />
        )

      return (
        <div className="slider">
          { this.state.loading ? null : items }
        </div>
      )
    }
}

export default Slider
