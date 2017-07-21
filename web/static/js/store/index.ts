import { combineReducers } from 'redux'

import * as Snippet from './snippet/reducer'

export interface ApplicationState {
  routing: any,
  snippets: Snippet.SnippetState[]
}

export const reducers = combineReducers({})
