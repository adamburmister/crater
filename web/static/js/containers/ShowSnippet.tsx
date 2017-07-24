import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Row, Col } from 'reactstrap'

import SnippetsListView from '../components/SnippetsListView'
import { SnippetState } from '../store/snippet/types'
import { actionCreators } from '../store/snippet/actions'
import { getSnippets } from '../store/snippet/reducer'

// TODO: Consider looking into Monaco Editor? Ace is good but both have their
// own advantages. <https://microsoft.github.io/monaco-editor/>

type SnippetsProps = SnippetState & typeof actionCreators & RouteComponentProps<{}>

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
        <h1>Showing snippet {this.props.snippetId}</h1>
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
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    selectSnippet: (snippetId) => { dispatch(actionCreators.selectSnippet(snippetId)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowSnippet) as typeof ShowSnippet
