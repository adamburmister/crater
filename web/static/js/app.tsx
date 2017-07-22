import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import configureStore from './configureStore'
import { ApplicationState } from './store'
import * as RoutesModule from './routes'

// TODO: This is some *really* weird stuff that react_phoenix does.
// This doesn't even work because `react_phoenix` doesn't play well with
// Webpack. We should remove this when we figure stuff out.
import 'react-phoenix'
import Header from './components/Header'

interface BrowserWindow extends Window {
  Components: any
}

let routes = RoutesModule.routes

// Create browser history to use in the Redux store
const history = createBrowserHistory()

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = (window as any).initialReduxState as ApplicationState
const store = configureStore(history, initialState)

function renderApp(): void {
  // This code starts up the React app when it runs in a browser. It sets up the routing configuration
  // and injects the app into a DOM element.
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history} children={routes} />
      </Provider>
    </AppContainer>,
    document.getElementById('react-app')
  )
}

// Temporary workaround for the non-React pages
if (document.getElementById('react-app')) renderApp()

// Allow Hot Module Replacement
if (module.hot) {
  module.hot.accept('./routes', () => {
    // tslint:disable-next-line
    routes = require<typeof RoutesModule>('./routes').routes
    renderApp()
  })
}

// TODO: Required by react-phoenix. Remove when we won't need it later.
// tslint:disable-next-line
;(window as BrowserWindow).Components = { Header }
