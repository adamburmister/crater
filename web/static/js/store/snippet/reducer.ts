import { Reducer } from 'redux'
import { FilterChangedAction, SnippetsFetchedAction } from './actionTypes'

export interface SnippetState {
  filter: string
  snippets: Snippet[]
}

interface Snippet {
  rawText: string
  language: string
  description?: string
}

// Declare a 'discriminated union' type. This guarantees that all references to
// 'type' properties contain one of the declared type strings (and not any
// other arbitrary string).
type KnownAction = FilterChangedAction | SnippetsFetchedAction

const initialState = { filter: '', snippets: [] }

const reducer: Reducer<SnippetState> = (state: SnippetState = initialState, action: KnownAction) => {
  switch (action.type) {
    default:
      // For unrecognized actions (or in cases where actions have no effect), must return the existing state
      // (or default initial state if none was supplied)
      return state
  }
}

export default reducer
