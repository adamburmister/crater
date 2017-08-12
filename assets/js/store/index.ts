import { combineReducers, Dispatch, Reducer } from 'redux'
import { routerReducer } from 'react-router-redux'

import snippet from './snippet/reducer'
import editor from './editor/reducer'

import { SnippetState } from './snippet/types'
import { EditorState } from './editor/types'

export interface ApplicationState {
  editor: EditorState,
  snippet: SnippetState
}

export interface ReduxDispatcher {
  dispatch: Dispatch<{}>
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  routing: routerReducer,
  snippet,
  editor
})
