import { combineReducers, Dispatch } from 'redux'
import { routerReducer } from 'react-router-redux'

import snippet from './snippet/reducer'
import editor from './editor/reducer'

import { SnippetState } from './snippet/types'
import { EditorState } from './editor/types'

export interface ApplicationState {
  routing: any,
  editor: EditorState,
  snippet: SnippetState
}

export interface ReduxDispatcher {
  dispatch: Dispatch<{}>
}

export const reducers = combineReducers<ApplicationState>({
  routing: routerReducer,
  snippet,
  editor
})
