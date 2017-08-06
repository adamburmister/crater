import { Reducer } from 'redux'
import { ApplicationState } from '../'
import { Snippet, SnippetState, SnippetActions as KnownAction } from './types'

const initialState = { filter: '', snippets: [], selectedSnippet: {} }

export default function reducer(state: SnippetState, action: KnownAction) {
  switch (action.type) {
    case 'snippet/SNIPPETS_FETCHED':
      return { ...state, snippets: action.snippets }
    case 'snippet/SNIPPETS_SELECTED':
      return { ...state, selectedSnippet: action.selectedSnippet }
    case 'snippet/SELECTED_SNIPPET_CLEARED':
      return { ...state, selectedSnippet: {} }
    default:
      // The following line guarantees that every action in the KnownAction union has been covered by a case above
      const exhaustiveCheck: never = action
  }
  // For unrecognized actions (or in cases where actions have no effect), must return the existing state
  // (or default initial state if none was supplied)
  return state || initialState
}

export function getSnippets(state: ApplicationState) {
  const { snippet } = state
  return snippet
}

export function getCurrentSnippet(state: ApplicationState) {
  const { snippet } = state
  return snippet.snippetId
}

export function getCurrentFilter(state: ApplicationState) {
  const { snippet } = state
  return snippet.filter
}
