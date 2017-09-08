import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Root from './containers/root/index'
import CapturePage from './containers/capturepage/index'
import ImagePage from './containers/imagepage/index'

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={CapturePage}></IndexRoute>
    <Route path="image/:id" component={ImagePage}></Route>
  </Route>
)