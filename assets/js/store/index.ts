import { combineReducers, Dispatch } from 'redux'
import { routerReducer } from 'react-router-redux'
import snippet from './snippet/reducer'
import { SnippetState } from './snippet/types'

export interface ApplicationState {
  routing: any,
  snippet: SnippetState
}

export interface ReduxDispatcher {
  dispatch: Dispatch<{}>
}

export const reducers = combineReducers<ApplicationState>({
  routing: routerReducer,
  snippet
})
