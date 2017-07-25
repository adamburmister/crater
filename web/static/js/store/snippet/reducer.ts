import { Reducer } from 'redux'
import { Snippet, SnippetState, FilterChangedAction, SnippetsFetchedAction, SnippetsSelectedAction } from './types'

// Declare a 'discriminated union' type. This guarantees that all references to
// 'type' properties contain one of the declared type strings (and not any
// other arbitrary string).
type KnownAction = FilterChangedAction | SnippetsFetchedAction | SnippetsSelectedAction

const initialState = { filter: '', snippets: [] }

export default function reducer(state: SnippetState = initialState, action: KnownAction) {
  switch (action.type) {
    case 'snippet.SNIPPETS_FETCHED':
      return { ...state, snippets: action.snippets }
    case 'snippet.SNIPPETS_SELECTED':
      return { ...state, snippetId: action.snippetId }
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

export function getCurrentSnippet(state) {
  const { snippet } = state
  return (snippet as SnippetState).snippetId
}

export function getCurrentFilter(state) {
  const { snippet } = state
  return (snippet as SnippetState).filter
}
