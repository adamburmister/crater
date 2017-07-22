import { FilterChangedAction, SnippetsFetchedAction } from './actionTypes'

export const actionCreators = {
  changeFilter: (newFilter) => <FilterChangedAction>{ type: 'snippet.FILTER_CHANGED', filter: newFilter }
}
