import * as React from 'react'
import { connect } from 'react-redux'
import { Link, RouteComponentProps } from 'react-router-dom'
import { Table, Row, Col, Button } from 'reactstrap'

import { ReduxDispatcher, ApplicationState } from '../store'
import { SnippetState, Snippet } from '../store/snippet/types'
import * as actions from '../store/snippet/actions'
import { getSnippets } from '../store/snippet/reducer'

type SnippetsProps = SnippetState & ReduxDispatcher & RouteComponentProps<{}>

class SnippetsComponent extends React.Component<SnippetsProps, {}> {
  constructor(props) {
    super(props)
  }

  private static renderSnippetsTable(snippets: Snippet[]) {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {snippets.map((snippet, key) => {
            return (
              <tr key={key}>
                <td>{snippet.title}</td>
                <td>{snippet.description}</td>
                <td className="text-right">
                  {/* TODO: Make this button actually work. */}
                  <Button color="secondary" size="sm"
                    tag={Link}
                    to={`/snippets/${snippet.id}`}>
                    Show
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }

  public componentDidMount() {
    this.props.dispatch(actions.fetchSnippets())
  }

  public render(): JSX.Element {
    if (!this.props.snippets) return this.renderLoading()
    return (
      <div>
        <h1>Snippets</h1>
        {SnippetsComponent.renderSnippetsTable(this.props.snippets)}
      </div>
    )
  }

  private renderLoading() {
    return (
      <p>Loading...</p>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => state.snippets

export default connect(mapStateToProps)(SnippetsComponent) as typeof SnippetsComponent
