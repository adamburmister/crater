import * as React from 'react'
import { connect } from 'react-redux'
import { Link, RouteComponentProps } from 'react-router-dom'
import { Jumbotron, Button, Row, Col } from 'reactstrap'

import { ApplicationState } from '../store'
import { fetchSnippets } from '../store/snippet/actions'
import { SnippetState } from '../store/snippet/types'

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
  constructor(props) {
    super(props)
  }

  public render(): JSX.Element {
    return (
      <div>
        <Jumbotron>
          <h1>This is Crater.</h1>
          <p className="lead"><em>"It's like 'hot or not' but for code."</em></p>
          <p className="lead">
            <Button color="primary" tag={Link} to="/new/snippet">New snippet</Button>{' '}
            <Button color="secondary" tag={Link} to="/snippets">Browse snippets</Button>
          </p>
        </Jumbotron>
      </div>
    )
  }
}
