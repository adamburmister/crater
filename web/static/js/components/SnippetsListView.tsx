import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Table, Button } from 'reactstrap'

import { actionCreators } from '../store/snippet/actions'
import { Snippet, SnippetState, getSnippets } from '../store/snippet/reducer'

interface ListViewProps {
  snippets: Snippet[]
}

export default class ListView extends React.Component<ListViewProps, {}> {

  constructor(props) {
    super(props)
  }

  public render() {
    if (!this.props.snippets) return this.renderLoading()
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
          {this.props.snippets.map((snippet, key) => {
            return (
              <tr key={key}>
                <td>{snippet.title}</td>
                <td>{snippet.description}</td>
                <td className="text-right">
                  {/* TODO: Make this button actually work. */}
                  <Button color="secondary" size="sm">Show</Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }

  private renderLoading() {
    return (
      <p>Loading...</p>
    )
  }

}
