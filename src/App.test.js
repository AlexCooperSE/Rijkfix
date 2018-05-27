import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios)
const data = {
  artObjects: [
    { objectNumber: 'AB-C-1', title: 'abc1', principalMaker: 'pm1', webImage: { url: 'abc1=s0' } },
    { objectNumber: 'DE-F-2', title: 'def1', principalMaker: 'pm2', webImage: { url: 'def1=s0' } }
  ]
}
mock.onGet(/https:\/\/www\.rijksmuseum\.nl\/.*/).reply(200, data)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
