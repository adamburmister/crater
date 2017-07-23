import { FilterChangedAction, /* SnippetsFetchedAction */ } from './actionTypes'

export const changeFilter = (newFilter) => ({
  type: 'snippet.FILTER_CHANGED', filter: newFilter
} as FilterChangedAction)
