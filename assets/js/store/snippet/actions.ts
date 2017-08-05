import {
  Snippet,
  FilterChangedAction,
  SnippetsFetchedAction,
  SnippetsSelectedAction,
  ClearSelectedSnippetAction
} from './types'
import apiService from '../../services/api'

export const changeFilter = (newFilter) => ({
  type: 'snippet/FILTER_CHANGED', filter: newFilter
} as FilterChangedAction)

export const fetchSnippets = () => {
  return (dispatch, getState) => {
    apiService.getAllSnippets().then((r) => {
      dispatch({ type: 'snippet/SNIPPETS_FETCHED', snippets: r.data } as SnippetsFetchedAction)
    })
  }
}

export const getSnippetById = (snippetId) => (dispatch, getState) => {
  apiService.getSnippetById(snippetId).then((r) => {
     dispatch({ type: 'snippet/SNIPPETS_SELECTED', selectedSnippet: r.data } as SnippetsSelectedAction)
  })
}

export const clearSelectedSnippet = () => ({
  type: 'snippet/SELECTED_SNIPPET_CLEARED'
} as ClearSelectedSnippetAction)
