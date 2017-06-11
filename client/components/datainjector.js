import React from 'react'
import { connect } from 'react-redux'

import Data from './data'

class DataInjector extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      data: Data
    }
  }
}

const mS2P = (state) => {
  return {
    data: state.data
  }
}

export default connect(mS2P)(DataInjector)
