import { Reducer } from 'redux'
import { EditorActions as KnownAction } from './types'
import { EditorState } from './types'

const initialState = {
  theme: 'monokai',
  mode: 'javascript',
  enableBasicAutocompletion: false,
  enableLiveAutocompletion: false,
  fontSize: 14,
  showGutter: true,
  showPrintMargin: true,
  highlightActiveLine: true,
  enableSnippets: false,
  showLineNumbers: true,
}

export default function reducer(state: EditorState = initialState, action: KnownAction) {
  switch (action.type) {
    case 'editor/THEME_CHANGED':
      return { ...state, theme: action.theme }
    case 'editor/MODE_CHANGED':
      return { ...state, mode: action.mode }
    case 'editor/FONT_SIZE_CHANGED':
      return { ...state, fontSize: action.fontSize }
    case 'editor/EDITOR_STATE_RESET':
      return initialState
    default:
      // The following line guarantees that every action in the KnownAction union has been covered by a case above
      const exhaustiveCheck: never = action
  }
  // For unrecognized actions (or in cases where actions have no effect), must return the existing state
  // (or default initial state if none was supplied)
  return state || initialState
}
