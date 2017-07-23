import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import configureStore from './configureStore'
import { ApplicationState } from './store'
import * as RoutesModule from './routes'

const routes = RoutesModule.routes

// Create browser history to use in the Redux store
const history = createBrowserHistory()

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = (window as any).initialReduxState as ApplicationState
const store = configureStore(history, initialState)

export default class Root extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history} children={routes} />
      </Provider>
    )
  }
}
