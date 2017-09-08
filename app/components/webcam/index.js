import React, { Component } from 'react'
import { connect } from 'react-redux'
import { requestStream, getScreenshot, clearScreenshot } from './actions'
import PropTypes from 'prop-types'

class Webcam extends Component {
  constructor(props){
    super(props)

    this.onRequestClicked = this.onRequestClicked.bind(this)
    this.onScreenshotClicked = this.onScreenshotClicked.bind(this)
    this.onClearClicked = this.onClearClicked.bind(this)
  }

  onRequestClicked(){
    this.props.requestStream()
  }

  onScreenshotClicked(){
    this.getScreenshot()
  }

  onClearClicked(){
    this.props.clearScreenshot()
  }

  render(){
    let contentEl

    // if there's an active screenhot, show it
    if (this.props.activeScreenshot){
      contentEl = this.renderScreenshot()

    // if the user has allowed access to the webcam and a stream
    // is available
    } else if (this.props.stream){
      contentEl = this.renderVideo()

    // if no stream is available, show a prompt to allow acces to webcam
    } else {
      contentEl = this.renderPrompt()
    }

    return (
      <div>
        { contentEl }
      </div>
    )
  }

  renderScreenshot(){
    return (
      <div>
        <img src={this.props.activeScreenshot}></img>
        <div>
          <button onClick={this.onClearClicked}>use a new photo</button>
        </div>
      </div>
    )
  }

  renderVideo(){
    return (
      <div>
        <video id="webcam-stream" src={window.URL.createObjectURL(this.props.stream)} autoPlay="true"></video>
        <div>
          <button onClick={this.onScreenshotClicked}>Take a photo</button>
        </div>
      </div>
    )
  }

  renderPrompt(){
    return <button onClick={this.onRequestClicked}>Allow access to camera</button>
  }

  getScreenshot(){
    // Ugly, but sufficent way to capture a screenshot.
    // creates a canvas, draws it according to the current video stream
    // then encode and saves it
    const video = document.querySelector('#webcam-stream')
    const canvas = document.createElement('canvas')
    const aspectRatio = video.videoWidth / video.videoHeight

    canvas.width = video.clientWidth
    canvas.height = video.clientWidth / aspectRatio

    const context = canvas.getContext('2d')
    context.drawImage(video, 0, 0, canvas.width, canvas.height)

    this.props.getScreenshot(canvas.toDataURL('image/webp'))
  }
}

function mapStateToProps(state){
  const { stream, activeScreenshot } = state.stream
  return {
    stream,
    activeScreenshot
  }
}

function mapDispatchToProps(dispatch){
  return {
    requestStream: () => { dispatch(requestStream()) },
    getScreenshot: (imageData) => { dispatch(getScreenshot(imageData)) },
    clearScreenshot: () => { dispatch(clearScreenshot()) }
  }
}

Webcam.propTypes = {
  stream: PropTypes.object,
  activeScreenshot: PropTypes.string,
  // functions
  getScreenshot: PropTypes.func,
  requestStream: PropTypes.func,
  clearScreenshot: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Webcam)