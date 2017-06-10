import React from 'react'

class Vote extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
        hasGreen: false,
        hasRed: false,
    }
  }
  greenVote(e) => {
    this.state.hasGreen ? greenvote += 1 : greenvote += 0
    this.setState ({hasGreen: true})
  }

render () {
  return (
<div>
<button type="button" value="green" onClick="(e) => greenUp(e)">
<button type="button" value="red" onClick="(e) => redUp(e)"
</div>)
  }
}

export default Vote;
