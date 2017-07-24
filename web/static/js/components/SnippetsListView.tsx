import * as React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { Table, Button } from 'reactstrap'

import { actionCreators } from '../store/snippet/actions'
import { Snippet, SnippetState } from '../store/snippet/types'
import { getSnippets } from '../store/snippet/reducer'

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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!this.props.snippets
            ? <tr><td>Loading...</td></tr>
            : this.props.snippets.map((snippet, key) => {
            return (
              <tr key={key}>
                <td>{snippet.title}</td>
                <td>{snippet.description}</td>
                <td className="text-right">
                  {/* TODO: Make this button actually work. */}
                  <Button color="secondary" size="sm"
                    tag={Link}
                    to={`/snippets/${this.props.snippets[key].id}`}>
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

}
