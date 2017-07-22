import { combineReducers } from 'redux'

import * as Snippet from './snippet/reducer'

export interface ApplicationState {
  routing: any,
  snippet: Snippet.SnippetState
}

export const reducers = combineReducers({})
