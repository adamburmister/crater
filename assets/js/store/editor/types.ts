// Any default states, actions, and models of the store should be put here.

export interface EditorState {
  theme: string
  mode: string
  fontSize: number
  [key: string]: any
}

// Action types should be unique across reducers, so namespace them with the
// reducer name.

export interface ThemeChangedAction {
  type: 'editor/THEME_CHANGED'
  theme: string
}

export interface ModeChangedAction {
  type: 'editor/MODE_CHANGED'
  mode: string
}

export interface FontSizeChangedAction {
  type: 'editor/FONT_SIZE_CHANGED'
  fontSize: number
}

export interface EditorStateResetAction {
  type: 'editor/EDITOR_STATE_RESET'
}

export type EditorActions = ThemeChangedAction | ModeChangedAction | FontSizeChangedAction | EditorStateResetAction
