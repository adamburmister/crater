import { createStore, applyMiddleware, compose, combineReducers, GenericStoreEnhancer, Store } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import * as StoreModule from './store'
import { ApplicationState, reducers } from './store'
import { History } from 'history'

export default function configureStore(history: History, initialState?: ApplicationState): Store<any> {
  // Build middleware. These are functions that can process the actions before they reach the store.
  const windowIfDefined = typeof window === 'undefined' ? null : window as any

  // If developer tools are installed, connect to it
  // TODO: Is this safe? Probably include a check involving `process.env.MIX_ENV`
  // so we won't accidentally include devtools in the production build
  const devToolsExtension = windowIfDefined && windowIfDefined.devToolsExtension as () => GenericStoreEnhancer

  const createStoreWithMiddleware = compose(
    applyMiddleware(thunk, routerMiddleware(history)),
    devToolsExtension ? devToolsExtension() : (f) => f
  )(createStore)

  // Combine all reducers and instantiate the app-wide store instance
  const store = createStoreWithMiddleware(reducers, initialState) as Store<ApplicationState>

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('./store', () => {
      // tslint:disable-next-line
      const nextRootReducer = require<typeof StoreModule>('./store')
      store.replaceReducer(nextRootReducer.reducers)
    })
  }

  return store
}
