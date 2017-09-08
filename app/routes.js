import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Root from './containers/root/index'
import WebcamPage from './components/webcam/index'

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={WebcamPage}></IndexRoute>
  </Route>
)