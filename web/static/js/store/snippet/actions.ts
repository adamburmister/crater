import { FilterChangedAction, /* SnippetsFetchedAction */ } from './actionTypes'

export const actionCreators = {
  changeFilter: (newFilter) => {
    return { type: 'snippet.FILTER_CHANGED', filter: newFilter } as FilterChangedAction
  }
}
