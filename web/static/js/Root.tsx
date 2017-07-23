import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'
import { RouteComponentProps } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { createBrowserHistory, createMemoryHistory } from 'history'
import configureStore from './configureStore'
import { ApplicationState } from './store'
import * as RoutesModule from './routes'

export default class Root extends React.Component<RouteComponentProps<{}>, {}> {
  public render(): JSX.Element {
    const routes = RoutesModule.routes
    const windowIfDefined = typeof window === 'undefined' ? null : window as any

    // Create browser history to use in the Redux store
    // const history = windowIfDefined ? createBrowserHistory() : createMemoryHistory()

    // Get the application-wide store instance, prepopulating with state from the server where available.
    const initialState = (window as any).initialReduxState as ApplicationState
    const { store, history } = configureStore(initialState)
    if (windowIfDefined) {
      return (
        <Provider store={store}>
          <ConnectedRouter history={history} children={routes} />
        </Provider>
      )
    } else {
      return (
        <Provider store={store}>
          <StaticRouter context={{}} location={this.props.location}>
            {routes}
          </StaticRouter>
        </Provider>
      )
    }
  }
}
