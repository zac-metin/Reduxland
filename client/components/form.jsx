import React from 'react'

class Form extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

    }
  }


render () {
  return (
    <div id ="form">
    <form onSubmit={this.submission}>
      <input type="text" className="namegiven" name="name" value={}>
      <input type="text" className="descgiven" name="desc" value={}>
      <input type="text" className="authorgiven" name="author" value={}>
      <input type="text" className="urlgiven" name="url" value={}>
      <input type="text" className="thumbnailgiven" name="thumbnail" value={}>
    </form>
    </div>
  }
}

export default Form;
