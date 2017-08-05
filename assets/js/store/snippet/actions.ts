import { Snippet, FilterChangedAction, SnippetsFetchedAction, SnippetsSelectedAction } from './types'
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
     dispatch({ type: 'snippet/SNIPPETS_FETCHED', snippets: r.data } as SnippetsFetchedAction)
  })
}
