import { combineReducers } from 'redux'

import snippet, { SnippetState } from './snippet/reducer'

export interface ApplicationState {
  routing: any,
  snippet: SnippetState
}

export const reducers = combineReducers({
  snippet
})
