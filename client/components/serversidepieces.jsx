import React from 'react'

class ServersidePieces extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
    }
  }
render () {
  return (
    <div className = "serversidepieces">

          <div className="server">
            <button type="button" className="btn-primary">Server</button>
          </div>

          <div className="routes">
            <button type="button" className="btn-primary">Routes</button>
          </div>

          <div className="dbfunctions">
            <button type="button" className="btn-primary">DB Functions</button>
          </div>

          <div className="databasetable">
            <button type="button" className="btn-primary">Database & Table</button>
          </div>

          <div className="seedmigrate">
            <button type="button" className="btn-primary">Migrations</button>
            <button type="button" className="btn-primary">Seeds</button>
          </div>


    </div>
    )
  }
}

export default ServersidePieces;
