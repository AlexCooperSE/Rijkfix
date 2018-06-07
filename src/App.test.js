import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios)
const sliderData = {
  artObjects: [
    {
      objectNumber: 'AB-C-1',
      title: 'abc1',
      principalOrFirstMaker: 'pm1',
      webImage: { url: 'abc1=s0' },
      dating: { presentingDate: '1234' },
      plaqueDescriptionEnglish: 'AB-C-1',
      materials: { 1: 'paper', 2: 'pen' }
    },
    {
      objectNumber: 'DE-F-2',
      title: 'def1',
      principalOrFirstMaker: 'pm2',
      webImage: { url: 'def1=s0' },
      dating: { presentingDate: '5678' },
      plaqueDescriptionEnglish: 'DE-F-2',
      materials: { 1: 'wood', 2: 'steel' }
    }
  ]
}
const featuredData = {
  artObject: {
    objectNumber: 'AB-C-1',
    title: 'abc1',
    principalOrFirstMaker: 'pm1',
    webImage: { url: 'abc1=s0' },
    dating: { presentingDate: '1234' },
    plaqueDescriptionEnglish: 'AB-C-1',
    materials: { 1: 'paper', 2: 'pen' }
  }
}
mock.onGet(/https:\/\/www\.rijksmuseum\.nl\/api\/en\/collection\?key=.*/).reply(200, sliderData)
mock.onGet(/https:\/\/www\.rijksmuseum\.nl\/api\/en\/collection\/.*/).reply(200, featuredData)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
