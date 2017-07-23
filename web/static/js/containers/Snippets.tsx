import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { Row, Col } from 'reactstrap'

import SnippetsListView from '../components/SnippetsListView'
import { actionCreators } from '../store/snippet/actions'
import { ApplicationState } from '../store'
import { SnippetState, getSnippets } from '../store/snippet/reducer'

// TODO: Consider looking into Monaco Editor? Ace is good but both have their
// own advantages. <https://microsoft.github.io/monaco-editor/>

type SnippetsProps = SnippetState & typeof actionCreators & RouteComponentProps<{}>

class Snippets extends React.Component<SnippetsProps, {}> {
  constructor(props) {
    super(props)
  }

  public componentDidMount() {
    this.props.fetchSnippets()
  }

  public render(): JSX.Element {
    return (
      <div>
        <h1>Snippets</h1>
        <SnippetsListView snippets={this.props.snippets} />
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
    changeFilter: () => { dispatch(actionCreators.changeFilter(ownProps.filter)) },
    fetchSnippets: () => { dispatch(actionCreators.fetchSnippets()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Snippets) as typeof Snippets
