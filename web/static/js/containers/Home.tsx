import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { Jumbotron, Button, Row, Col } from 'reactstrap'

import { ApplicationState } from '../store'
import { fetchSnippets } from '../store/snippet/actions'
import { SnippetState } from '../store/snippet/reducer'

// TODO: Consider looking into Monaco Editor? Ace is good but both have their
// own advantages. <https://microsoft.github.io/monaco-editor/>

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
            <Button color="primary" href="/snippets">Browse snippets</Button>
          </p>
        </Jumbotron>

        <Row className="marketing">
          <Col lg="6">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="http://phoenixframework.org/docs/overview">Guides</a>
              </li>
              <li>
                <a href="https://hexdocs.pm/phoenix">Docs</a>
              </li>
              <li>
                <a href="https://github.com/phoenixframework/phoenix">Source</a>
              </li>
            </ul>
          </Col>

          <Col lg="6">
            <h4>Help</h4>
            <ul>
              <li>
                <a href="http://groups.google.com/group/phoenix-talk">Mailing list</a>
              </li>
              <li>
                <a href="http://webchat.freenode.net/?channels=elixir-lang">#elixir-lang on freenode IRC</a>
              </li>
              <li>
                <a href="https://twitter.com/elixirphoenix">@elixirphoenix</a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    )
  }
}
