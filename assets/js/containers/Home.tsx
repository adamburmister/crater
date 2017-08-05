import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { Jumbotron, Button, Row, Col } from 'reactstrap'

import SnippetEditor from '../components/SnippetEditor'

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
            <Button color="primary" href="#create-snippet">New snippet</Button>{' '}
            <Button color="secondary" href="/snippets">Browse snippets</Button>
          </p>
        </Jumbotron>

        <Row id="create-snippet">
          <Col lg="12">
            <h2>Create snippet</h2>
            <div className="mt-3">
              {/* TODO: This bring up a type error in TypeScript, however
                Webpack still compiles. Haven't been able to figure out why. */}
              <SnippetEditor />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
