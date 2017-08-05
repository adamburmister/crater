/* tslint:disable:no-require-imports */

import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Row, Col, Form, FormGroup, Button, Label, Input } from 'reactstrap'
import AceEditor from 'react-ace'

import 'brace/ext/language_tools'
import 'brace/ext/searchbox'

import { ReduxDispatcher, ApplicationState } from '../store'
import { EditorState } from '../store/editor/types'
import * as actions from '../store/editor/actions'

// List of supported languages in ace-editor
const languages = [
  'javascript',
  'jsx',
  'java',
  'python',
  'xml',
  'ruby',
  'sass',
  'markdown',
  'mysql',
  'json',
  'html',
  'handlebars',
  'golang',
  'csharp',
  'elixir',
  'typescript',
  'css'
]

// List of supported themes in ace-editor
const themes = [
  'monokai',
  'github',
  'tomorrow',
  'kuroir',
  'twilight',
  'xcode',
  'textmate',
  'solarized_dark',
  'solarized_light',
  'terminal',
]

// Iterate through each language/theme and import them to the component.

languages.forEach((lang) => {
  require(`brace/mode/${lang}`)
  require(`brace/snippets/${lang}`)
})

themes.forEach((theme) => {
  require(`brace/theme/${theme}`)
})

type EditorProps = EditorState & ReduxDispatcher

// We don't use Redux state for the editor content.
interface EditorReactState {
  value: string
}

class CreateSnippetComponent extends React.Component<{} & EditorProps, EditorReactState> {
  constructor(props) {
    super(props)
    this.state = {
      value: `// write your snippet here...`
    }
  }

  public render(): JSX.Element {
    return (
      <div>
        <h1>New Snippet</h1>
        <Form>
          <Row className="mt-3">
            <Col lg="6">
              <FormGroup>
                <Label htmlFor="mode">
                  Language
                </Label>
                <Input type="select" name="mode" onChange={this.setMode.bind(this)} value={this.props.mode}>
                  {languages.map((lang) => <option key={lang} value={lang}>{lang}</option>)}
                </Input>
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <Label htmlFor="theme">
                  Theme
                </Label>
                <Input type="select" name="theme" onChange={this.setTheme.bind(this)} value={this.props.theme}>
                  {themes.map((theme) => <option key={theme} value={theme}>{theme}</option>)}
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <Form onSubmit={this.onSubmit.bind(this)}>
          <Row className="mt-2 mb-3">
            <Col lg="12">
              <AceEditor
                mode={this.props.mode}
                theme={this.props.theme}
                name="snippet-editor"
                width="100%"
                onChange={this.onChange.bind(this)}
                fontSize={this.props.fontSize}
                value={this.state.value}
                editorProps={{ $blockScrolling: true }}
              />
            </Col>
          </Row>
          <Button color="primary" type="submit">Submit</Button>
        </Form>
      </div>
    )
  }

  private onChange(newValue) {
    this.setState({
      value: newValue
    })
  }

  private setTheme(e) {
    this.props.dispatch(actions.setTheme(e.target.value))
  }

  private setMode(e) {
    this.props.dispatch(actions.setMode(e.target.value))
  }

  private onSubmit(e) {
    console.log(e)
  }
}

const mapStateToProps = (state: ApplicationState) => state.editor

export default connect(mapStateToProps)(CreateSnippetComponent) as typeof CreateSnippetComponent
