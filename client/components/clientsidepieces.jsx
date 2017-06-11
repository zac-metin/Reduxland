import React from 'react'

class ClientsidePieces extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
    }
  }
render () {
  return (
      <div className = "frontend">
          <div className="reducer">
            <button className="clientside">Reducer</button>
          </div>
          <div className="actions">
            <button className="clientside">Actions</button>
          </div>
          <div className="connected">
            <button className="clientside">Connected Component</button>
          </div>
          <div className="appbtn">
            <button className="clientside">App</button>
          </div>
          <div className="indexbtn">
            <button className="clientside">Index</button>
          </div>

        </div>
    )
  }
}

export default ClientsidePieces;
