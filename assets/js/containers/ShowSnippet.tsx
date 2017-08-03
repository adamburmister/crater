import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Row, Col } from 'reactstrap'

import SnippetsListView from '../components/SnippetsListView'
import { SnippetState } from '../store/snippet/types'
import * as actions from '../store/snippet/actions'
import { getSnippets, getCurrentSnippet } from '../store/snippet/reducer'

// TODO: Consider looking into Monaco Editor? Ace is good but both have their
// own advantages. <https://microsoft.github.io/monaco-editor/>

type SnippetsProps = SnippetState & typeof actions & RouteComponentProps<{}>

class ShowSnippet extends React.Component<SnippetsProps, {}> {
  constructor(props) {
    super(props)
  }

  public componentDidMount() {
    console.log('componentDidMount')
    this.props.selectSnippet(this.props.snippetId)
  }

  public render(): JSX.Element {
    return (
      <div>
        <h2>ShowSnippet {this.props.snippetId}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const snippets = getSnippets(state)
  const snippetId = getCurrentSnippet(state)
  return {
    filter: state.filter,
    snippets,
    snippetId
  } as SnippetState
}
const mapDispatchToProps = (dispatch) => {
  return {
    selectSnippet: (snippetId) => { dispatch(actions.selectSnippet(snippetId)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowSnippet) as typeof ShowSnippet
