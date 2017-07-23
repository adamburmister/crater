import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Table } from 'reactstrap'

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
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {this.props.snippets.map((snippet, key) => {
            return (
              <tr key={key}>
                <td>{snippet.title}</td>
                <td>{snippet.description}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }

}
