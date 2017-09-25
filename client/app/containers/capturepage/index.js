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
    this.props.createImage(this.props.activeScreenshot)
  }

  render(){
    const nextButton = this.props.activeScreenshot ? this.renderNextButton() : ''

    return (
      <div>
        <Webcam></Webcam>
        <div className="sep1">
          { nextButton }
        </div>
      </div>
    )
  }

  renderNextButton(){
    return <button onClick={this.onNextClicked}>Use photo</button>
  }
}

CapturePage.propTypes = {
  activeScreenshot: PropTypes.string,
  createImage: PropTypes.func
}

function mapStateToProps(state){
  const { activeScreenshot} = state.stream
  return {
    activeScreenshot
  }
}

function mapDispatchToProps(dispatch){
  return {
    createImage: (image) => {
      dispatch(createImage(image)).then(function(id){
        browserHistory.push(`/image/${id}`)
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CapturePage)