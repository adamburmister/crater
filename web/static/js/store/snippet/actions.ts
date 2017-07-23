import { FilterChangedAction, SnippetsFetchedAction } from './actionTypes'
import { Snippet } from './reducer'
import apiService from '../../services/api'

export const changeFilter = (newFilter) => ({
  type: 'snippet.FILTER_CHANGED', filter: newFilter
} as FilterChangedAction)

export const fetchSnippets = () => {
  return (dispatch, getState) => {
    apiService.getAllSnippets().then((r) => {
      dispatch({ type: 'snippet.SNIPPETS_FETCHED', snippets: r.data })
    })
  }
}

export const actionCreators = {
  changeFilter, fetchSnippets
}
