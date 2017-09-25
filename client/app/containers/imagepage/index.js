import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { loadImages } from '../../core/images/actions'

function findImageWithId(images, id){
  return images.find(image => {
    return image.id === id
  })
}

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
    const activeImage = findImageWithId(this.props.images, this.props.routeParams.id)

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
  loadImages: PropTypes.func,
  routeParams: PropTypes.object
}

function mapStateToProps(state){
  return {
    images: state.images.images
  }
}

function mapDispatchToProps(dispatch){
  return {
    loadImages: () => { dispatch(loadImages()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CapturePage)