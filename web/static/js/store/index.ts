import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import snippet, { SnippetState } from './snippet/reducer'

export interface ApplicationState {
  routing: any,
  snippet: SnippetState
}

export const reducers = combineReducers<ApplicationState>({
  routing: routerReducer,
  snippet
})
