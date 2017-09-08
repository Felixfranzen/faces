import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearStream, requestStream } from './actions'
import PropTypes from 'prop-types'

class WebcamPage extends Component {
  constructor(props){
    super(props)
    this.onRequestClicked = this.onRequestClicked.bind(this)
    this.onClearClicked = this.onClearClicked.bind(this)
  }

  onRequestClicked(){
    this.props.requestStream()
  }

  onClearClicked(){
    this.props.clearStream()
  }

  render(){
    let contentEl
    if (this.props.stream && this.props.videoSrc && !this.props.requesting){
      contentEl = this.renderVideo()
    } else {
      contentEl = this.renderPrompt()
    }

    return (
      <div>
        { contentEl }
      </div>
    )
  }

  renderVideo(){
    return (
      <div>
        <video src={this.props.videoSrc} autoPlay="true"></video>
        <div>
          <button onClick={this.onClearClicked}>Clear camera</button>
        </div>
      </div>
    )
  }

  renderPrompt(){
    return <button onClick={this.onRequestClicked}>Access camera</button>
  }
}

function mapStateToProps(state){
  const { stream, videoSrc, requesting } = state.stream
  return {
    stream,
    videoSrc,
    requesting
  }
}

function mapDispatchToProps(dispatch){
  return {
    requestStream: () => { dispatch(requestStream()) },
    clearStream: () => { dispatch(clearStream()) }
  }
}

WebcamPage.propTypes = {
  stream: PropTypes.object,
  videoSrc: PropTypes.string,
  requesting: PropTypes.bool,
  // functions
  requestStream: PropTypes.func,
  clearStream: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(WebcamPage)