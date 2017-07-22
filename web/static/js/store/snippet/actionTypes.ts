// Action types should be unique across reducers, so namespace them with the
// reducer name.

export interface FilterChangedAction {
  type: 'snippet.FILTER_CHANGED'
}

export interface SnippetsFetchedAction {
  type: 'snippet.SNIPPETS_FETCHED'
}
