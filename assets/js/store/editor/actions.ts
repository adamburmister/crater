import { ThemeChangedAction, ModeChangedAction, FontSizeChangedAction, EditorStateResetAction } from './types'

export const setMode = (mode) => ({
  type: 'editor/MODE_CHANGED', mode
} as ModeChangedAction)

export const setTheme = (theme) => ({
  type: 'editor/THEME_CHANGED', theme
} as ThemeChangedAction)

export const setFontSize = (fontSize) => ({
  type: 'editor/FONT_SIZE_CHANGED', fontSize
} as FontSizeChangedAction)

export const resetEditorState = () => ({
  type: 'editor/EDITOR_STATE_RESET'
} as EditorStateResetAction)
