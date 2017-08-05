import { Reducer } from 'redux'
import { SnippetActions } from './types'
import { Snippet, SnippetState, FilterChangedAction, SnippetsFetchedAction, SnippetsSelectedAction } from './types'

const initialState = { filter: '', snippets: [] }

export default function reducer(state: SnippetState = initialState, action: SnippetActions) {
  switch (action.type) {
    case 'snippet/SNIPPETS_FETCHED':
      return { ...state, snippets: action.snippets }
    case 'snippet/SNIPPETS_SELECTED':
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
