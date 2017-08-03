import * as React from 'react'
import { connect } from 'react-redux'
import { Route, RouteComponentProps } from 'react-router-dom'
import { Row, Col } from 'reactstrap'

import SnippetsListView from '../components/SnippetsListView'
import { SnippetState } from '../store/snippet/types'
import * as actions from '../store/snippet/actions'
import { getSnippets } from '../store/snippet/reducer'

import ShowSnippet from './ShowSnippet'

// TODO: Consider looking into Monaco Editor? Ace is good but both have their
// own advantages. <https://microsoft.github.io/monaco-editor/>

type SnippetsProps = SnippetState & typeof actions & RouteComponentProps<{}>

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

        {/* To be honest, I still have that you now have to do this crap in react-router... */}
        <Route exact path={this.props.match.path} component={SnippetsListView} />
        <Route path="/:id" component={ShowSnippet} />
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
    changeFilter: () => { dispatch(actions.changeFilter(ownProps.filter)) },
    fetchSnippets: () => { dispatch(actions.fetchSnippets()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Snippets) as typeof Snippets
