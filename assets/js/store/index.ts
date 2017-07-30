import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import snippet from './snippet/reducer'
import { SnippetState } from './snippet/types'

export interface ApplicationState {
  routing: any,
  snippet: SnippetState
}

export const reducers = combineReducers<ApplicationState>({
  routing: routerReducer,
  snippet
})
