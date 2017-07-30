import { Snippet, FilterChangedAction, SnippetsFetchedAction, SnippetsSelectedAction } from './types'
import apiService from '../../services/api'

export interface FilterChangedAction {
  type: 'snippet.FILTER_CHANGED'
}

export interface SnippetsFetchedAction {
  type: 'snippet.SNIPPETS_FETCHED',
  snippets: Snippet
}

export interface SnippetsSelectedAction {
  type: 'snippet.SNIPPETS_SELECTED',
  snippetId: string
}

// Declare a 'discriminated union' type. This guarantees that all references to
// 'type' properties contain one of the declared type strings (and not any
// other arbitrary string).

export type SnippetActions = FilterChangedAction | SnippetsFetchedAction | SnippetsSelectedAction

export const changeFilter = (newFilter) => ({
  type: 'snippet.FILTER_CHANGED', filter: newFilter
} as FilterChangedAction)

export const fetchSnippets = () => {
  return (dispatch, getState) => {
    apiService.getAllSnippets().then((r) => {
      dispatch({ type: 'snippet.SNIPPETS_FETCHED', snippets: r.data } as SnippetsFetchedAction)
    })
  }
}

export const selectSnippet = (snippetId) => {
  return (dispatch, getState) => {
    dispatch({ type: 'snippet.SNIPPETS_SELECTED', snippetId } as SnippetsSelectedAction)
  }
}

export const actionCreators = {
  changeFilter, fetchSnippets, selectSnippet
}
