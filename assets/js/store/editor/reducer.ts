import { Reducer } from 'redux'
import { EditorActions } from './types'
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

export default function reducer(state: EditorState = initialState, action: EditorActions) {
  switch (action.type) {
    case 'editor/THEME_CHANGED':
      return { ...state, theme: action.theme }
    case 'editor/MODE_CHANGED':
      return { ...state, mode: action.mode }
    case 'editor/FONT_SIZE_CHANGED':
      return { ...state, fontSize: action.fontSize }
    default:
      return state
  }
}
