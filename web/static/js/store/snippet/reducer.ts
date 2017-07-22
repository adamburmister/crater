import { Reducer } from 'redux'
import { ActionWithType } from '../../utils'

export interface SnippetState {
  rawText: string
  language: string
  description?: string
}

type KnownAction = ActionWithType

export const reducer: Reducer<SnippetState> = (state: SnippetState, action: ActionWithType) => {
  switch (action.type) {
    default:
      // For unrecognized actions (or in cases where actions have no effect), must return the existing state
      // (or default initial state if none was supplied)
      return state || { rawText: '', language: 'js' }
  }
}

export default reducer
