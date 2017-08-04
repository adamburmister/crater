import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Row, Col } from 'reactstrap'

import { ReduxDispatcher } from '../store'
import { SnippetState } from '../store/snippet/types'
import * as actions from '../store/snippet/actions'
import { getSnippets, getCurrentSnippet } from '../store/snippet/reducer'

// TODO: Consider looking into Monaco Editor? Ace is good but both have their
// own advantages. <https://microsoft.github.io/monaco-editor/>

type SnippetsProps = SnippetState & ReduxDispatcher & RouteComponentProps<{}>

class SnippetComponent extends React.Component<SnippetsProps, {}> {
  constructor(props) {
    super(props)
  }

  public componentDidMount() {
    this.props.dispatch(actions.getSnippetById(this.props.snippetId))
  }

  public render(): JSX.Element {
    return (
      <div>
        <h2>Snippet {this.props.snippetId}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const snippets = getSnippets(state)
  return {
    filter: state.filter,
    snippets
  } as SnippetState
}

export default connect(mapStateToProps)(SnippetComponent) as typeof SnippetComponent
