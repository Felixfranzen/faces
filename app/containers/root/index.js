import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Root extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="root-container">
        <h1 className="align-center">Webcam project</h1>
        <div className="image-content-container">
          { this.props.children }
        </div>
      </div>
    )
  }
}

Root.propTypes = {
  children: PropTypes.node
}