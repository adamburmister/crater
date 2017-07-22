import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'

import { ApplicationState }  from '../store'
import { actionCreators }  from '../store/snippet/actions'

// TODO: Consider looking into Monaco Editor? Ace is good but both have their
// own advantages. <https://microsoft.github.io/monaco-editor/>

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
  public render(): JSX.Element {
    return (
      <div>
        <h1>This is Crater.</h1>
        <p className="lead"><a href="/snippets">Snippets</a></p>

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

// export default connect((state: ApplicationState) => state.snippets, actionCreators)(Home) as typeof Home
