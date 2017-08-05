/* tslint:disable:no-require-imports */

import * as React from 'react'
import { connect } from 'react-redux'
import { Link, RouteComponentProps } from 'react-router-dom'
import { Row, Col, Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBlock, Badge } from 'reactstrap'
import AceEditor from 'react-ace'

import { ReduxDispatcher, ApplicationState } from '../store'
import { SnippetState, Snippet } from '../store/snippet/types'
import * as actions from '../store/snippet/actions'
import { getSnippets } from '../store/snippet/reducer'

import { languages } from '../utils/ace-editor'

// Iterate through each language/theme and import them to the component.
languages.forEach((lang) => {
  require(`brace/mode/${lang}`)
  require(`brace/snippets/${lang}`)
})

type SnippetsProps = SnippetState & ReduxDispatcher & RouteComponentProps<{}>

class SnippetsComponent extends React.Component<SnippetsProps, {}> {
  constructor(props) {
    super(props)
  }

  private static renderSnippetsDeck(snippets: Snippet[]) {
    return (
      <CardDeck className="mt-3">
        {/* TODO: Placeholder rating value. */}
        {/* TODO: Design still pretty much in its early stage. Definitely subject to change. */}
        {snippets.map((snippet, key) => {
          return (
            <Card key={snippet.id}>
              <CardBlock>
                <CardTitle className="mb-0">{snippet.title} <Badge color="success">9.4</Badge></CardTitle>
              </CardBlock>
              <CardImg tag="div">
                <AceEditor
                  mode={snippet.language}
                  theme={'github'}
                  name="snippet-list"
                  width="100%"
                  height="5rem"
                  readOnly
                  value={snippet.body.length > 100
                    ? `${snippet.body.substring(0, 100)}...`
                    : snippet.body}
                  fontSize={14}
                  editorProps={{ $blockScrolling: true }}
                  onLoad={(editor: any) => {
                    editor.getSession().setUseWorker(false)
                  }}
                />
              </CardImg>
              <CardBlock>
                <CardText>{snippet.description}</CardText>
                <Button color="secondary"
                  tag={Link}
                  to={`/snippets/${snippet.id}`}>
                  Show
                </Button>
              </CardBlock>
            </Card>
          )
        })}
      </CardDeck>
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
        {SnippetsComponent.renderSnippetsDeck(this.props.snippets)}
      </div>
    )
  }

  private renderLoading() {
    return (
      <p>Loading...</p>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => state.snippet

export default connect(mapStateToProps)(SnippetsComponent) as typeof SnippetsComponent
