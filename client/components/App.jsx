import React from 'react'

import CSP from './clientsidepieces'
import SSP from './serversidepieces'
import MP from './middle'

const App = () => {
  return (
    <div className="container">
      <div className="storebtn">
        <button className="store">Store</button>
      </div>
          <CSP />
          <MP />
        <SSP />
    </div>
  )
}

export default App
