/* tslint:disable:no-require-imports */

import * as React from 'react'
import { connect } from 'react-redux'
import { Link, RouteComponentProps } from 'react-router-dom'
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Badge } from 'reactstrap'
import AceEditor from 'react-ace'

import { ReduxDispatcher, ApplicationState } from '../store'
import { SnippetState } from '../store/snippet/types'
import { EditorState } from '../store/editor/types'
import * as snippetActions from '../store/snippet/actions'
import * as editorActions from '../store/editor/actions'
import { getSnippets, getCurrentSnippet } from '../store/snippet/reducer'

import { languages, themes } from '../utils/ace-editor'

// Iterate through each language/theme and import them to the component.
languages.forEach((lang) => {
  require(`brace/mode/${lang}`)
  require(`brace/snippets/${lang}`)
})
themes.forEach((theme) => {
  require(`brace/theme/${theme}`)
})

interface ComponentState {
  snippet: SnippetState,
  editor: EditorState
}

interface DetailParams {
  id: string
}

type ComponentProps = EditorState & ComponentState & ReduxDispatcher & RouteComponentProps<DetailParams>

class SnippetComponent extends React.Component<ComponentProps, {}> {
  constructor(props) {
    super(props)
  }

  public componentDidMount() {
    const { match } = this.props
    this.props.dispatch(snippetActions.getSnippetById(match.params.id))
  }

  public render(): JSX.Element {
    const { snippet, editor } = this.props
    const { selectedSnippet } = snippet
    if (!selectedSnippet) return this.renderLoading()
    return (
      <Container>
        <Breadcrumb>
          <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
          <BreadcrumbItem><Link to="/snippets">Snippets</Link></BreadcrumbItem>
          <BreadcrumbItem active>{selectedSnippet.title}</BreadcrumbItem>
        </Breadcrumb>

        {/* TODO: Placeholder rating value. */}
        {/* TODO: Design still pretty much in its early stage. Definitely subject to change. */}
        <h2>{selectedSnippet.title} <Badge color="success">9.4</Badge></h2>
        {selectedSnippet.description
          ? <p>{selectedSnippet.description}</p>
          : ''}

        <div className="mt-3">
          <AceEditor
            mode={selectedSnippet.language}
            theme={editor.theme}
            name="snippet-editor"
            width="100%"
            readOnly
            value={selectedSnippet.body}
            fontSize={editor.fontSize}
            editorProps={{ $blockScrolling: true }}
          />
        </div>
      </Container>
    )
  }

  private renderLoading(): JSX.Element {
    return (
      <p>Loading...</p>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  snippet: state.snippet,
  editor: state.editor
})

export default connect(mapStateToProps)(SnippetComponent) as typeof SnippetComponent
