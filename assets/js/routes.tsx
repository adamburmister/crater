import * as React from 'react'
import { Route } from 'react-router-dom'

import Root from './Root'
import Home from './containers/Home'
import SnippetsContainer from './containers/Snippets'

export const routes = (
  <Root>
    <Route exact path="/" component={ Home } />
    <Route path="/snippets" component={ SnippetsContainer } />
  </Root>
)
