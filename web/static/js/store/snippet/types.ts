// Any default states, actions, and models of the store should be put here.

export interface SnippetState {
  filter: string
  snippets: Snippet[]
}

export interface Snippet {
  id: string
  body: string
  title: string
  language: string
  description?: string
}

// Action types should be unique across reducers, so namespace them with the
// reducer name.

export interface FilterChangedAction {
  type: 'snippet.FILTER_CHANGED'
}

export interface SnippetsFetchedAction {
  type: 'snippet.SNIPPETS_FETCHED',
  snippets: Snippet
}
