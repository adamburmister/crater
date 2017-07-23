import * as React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Root from './Root'
import Home from './containers/Home'
import Snippets from './containers/Snippets'

export const routes = (
  <Root>
    <Route exact path="/" component={ Home } />
    <Route path="/snippets" component={ Snippets } />
  </Root>
)
