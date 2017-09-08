import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { loadImages } from '../../core/images/actions'

class CapturePage extends Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    if (this.props.images.length === 0){
      console.log(this.props.loadImages())
      return
    }
  }

  render(){
    const activeImage = this.props.images.filter(image => {
      return image.id === 1234
    })[0]

    if (activeImage){
      return (
        <div>
          <img src={activeImage.url} />
          <p>{activeImage.id}</p>
        </div>
      )
    }

    return <div></div>
  }
}

CapturePage.propTypes = {
  images: PropTypes.array,
  loadImages: PropTypes.func
}

function mapStateToProps(state){
  return {
    images: state.images.images
  }
}

function mapDispatchToProps(dispatch){
  return {
    loadImages: () => { dispatch(loadImages(loadImages)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CapturePage)