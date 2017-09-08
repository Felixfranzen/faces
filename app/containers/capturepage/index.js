import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Webcam from '../../components/webcam/index'
import { browserHistory } from 'react-router'
import { createImage } from '../../core/images/actions'

class CapturePage extends Component{
  constructor(props){
    super(props)
    this.onNextClicked = this.onNextClicked.bind(this)
  }

  onNextClicked(){
    console.log(createImage)
    // Save image then on success navigate to the link below
    browserHistory.push('/image/1234')
  }

  render(){
    const nextButton = this.props.activeScreenshot ? this.renderNextButton() : ''

    return (
      <div>
        <Webcam></Webcam>
        { nextButton }
      </div>
    )
  }

  renderNextButton(){
    return <button onClick={this.onNextClicked}>Use photo</button>
  }
}

CapturePage.propTypes = {
  activeScreenshot: PropTypes.string
}

function mapStateToProps(state){
  const { activeScreenshot} = state.stream
  return {
    activeScreenshot
  }
}

export default connect(mapStateToProps, null)(CapturePage)