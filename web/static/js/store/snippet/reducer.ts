import { Reducer } from 'redux'
import { FilterChangedAction, SnippetsFetchedAction } from './actionTypes'

export interface SnippetState {
  filter: string
  snippets: Snippet[]
}

export interface Snippet {
  id: string
  body: string
  title: string
  language: string
  description?: string
}

// Declare a 'discriminated union' type. This guarantees that all references to
// 'type' properties contain one of the declared type strings (and not any
// other arbitrary string).
type KnownAction = FilterChangedAction | SnippetsFetchedAction

const initialState = { filter: '', snippets: [] }

export default function reducer(state: SnippetState = initialState, action: KnownAction) {
  switch (action.type) {
    case 'snippet.SNIPPETS_FETCHED':
      return { ...state, snippets: action.snippets }
    default:
      // For unrecognized actions (or in cases where actions have no effect), must return the existing state
      // (or default initial state if none was supplied)
      return state
  }
}

export function getSnippets(state) {
  const { snippet } = state
  return (snippet as SnippetState).snippets
}

export function getCurrentFilter(state) {
  const { snippet } = state
  return (snippet as SnippetState).filter
}
