// Any default states, actions, and models of the store should be put here.

export interface SnippetState {
  filter: string
  snippets: Snippet[]
  snippetId?: string
  selectedSnippet?: Snippet
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

export interface SnippetsSelectedAction {
  type: 'snippet.SNIPPETS_SELECTED',
  snippetId: string
}

// Declare a 'discriminated union' type. This guarantees that all references to
// 'type' properties contain one of the declared type strings (and not any
// other arbitrary string).

export type SnippetActions = FilterChangedAction | SnippetsFetchedAction | SnippetsSelectedAction
