import React from 'react'

class Viewer extends React.Component{
render () {
  return (
    <a-scene>
      <a-assets>
            <video id="video" src={this.props.url} autoplay loop crossorigin></video>
      </a-assets>
      <a-videosphere src="#video" rotation="0 0 0"></a-videosphere>
    </a-scene>)
  }
}

export default Viewer;
