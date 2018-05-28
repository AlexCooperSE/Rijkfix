import React, { Component } from 'react'
import axios from 'axios'

class Featured extends Component {

    state = {
      data: {},
      loading: true
    };

    apiKey = process.env.REACT_APP_RIJKS_API_KEY;

    componentDidMount() {
      this.getObject(this.props.item)
    }

    previewText = (text) => {
      const len = 25
      const words = text.split(' ')
      words.splice(len, words.length - len, '...')
      return words.join(' ')
    }

    getObject = (item) => {
      const baseUri = 'https://www.rijksmuseum.nl/api/en/collection'
      const defaults = 'format=json&imgonly=true'
      const requestUri = `${baseUri}/${item}?key=${this.apiKey}&${defaults}`
      console.log(requestUri)
      axios.get(requestUri)
        .then(response => {
          const object = response.data.artObject
          const data = {
            id:     object.objectNumber,
            title:  object.title,
            artist: object.principalOrFirstMaker,
            img:    object.webImage.url,
            date:   object.dating.presentingDate,
            desc:   this.previewText(object.plaqueDescriptionEnglish),
            materials: Object.values(object.materials).join(', ')
          }
          console.log(object)
          this.setState({
            data,
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
      return (
        <div className="featured">
          <div className="featured-img" style={{
            'backgroundImage': `url(${this.state.data.img})`,
            'backgroundPosition': this.props.pos
          }}></div>
          <div className="featured-text">
            <div className="featured-artist">{this.state.data.artist}</div>
            <div className="featured-title">{this.state.data.title}</div>
            <div className="featured-date">{this.state.data.date}</div>
            <div className="featured-desc">{this.state.data.desc}</div>
            <div className="featured-materials">{this.state.data.materials}</div>
          </div>
        </div>
      )
    }
}

export default Featured
