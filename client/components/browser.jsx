import React from 'react'

import db from './db'

import Vote from './components/vote'


class Browser extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      videos: db.ShowEntireDb()
    }
  }
render () {
  return (
    <Videos />
    <Footer />
  }
}

export default Browser;
