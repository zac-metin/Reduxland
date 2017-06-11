import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Tab from './MaterialTab'

injectTapEventPlugin()

class Middle extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
    }
  }
render () {
  return (
    <div className="middle">

        <div className="api">
          <button>API Functions</button>
        </div>
        <div className="textbox">
          <MuiThemeProvider>
            <Tab />
          </MuiThemeProvider>
        </div>
    </div>
    )
  }
}

export default Middle;
