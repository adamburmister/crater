/* tslint:disable:no-require-imports */

import * as React from 'react'
import { connect } from 'react-redux'
import { Link, RouteComponentProps } from 'react-router-dom'
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Form, FormGroup, Button, Label, Input } from 'reactstrap'
import AceEditor from 'react-ace'

import 'brace/ext/language_tools'
import 'brace/ext/searchbox'

import { ReduxDispatcher, ApplicationState } from '../store'
import { EditorState } from '../store/editor/types'
import * as actions from '../store/editor/actions'

import { languages, themes } from '../utils/ace-editor'

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
      <Container>
        <Breadcrumb>
          <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
          <BreadcrumbItem><Link to="/snippets">Snippets</Link></BreadcrumbItem>
          <BreadcrumbItem active>New Snippet</BreadcrumbItem>
        </Breadcrumb>
        <h1>New Snippet</h1>
        <Form className="mt-3">
          <Row>
            <Col lg="12">
              <FormGroup>
                <Label htmlFor="title">
                  Title
                </Label>
                <Input type="text" name="title" placeholder="Enter a title..." />
              </FormGroup>
            </Col>
          </Row>
          <Row>
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
          {/* TODO: Handle snippet submission. */}
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
          <Button color="primary" type="submit" block>Submit</Button>
        </Form>
      </Container>
    )
  }

  private onChange(newValue) {
    console.log(newValue)
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
    e.preventDefault()
    console.log(this.state.value)
  }
}

const mapStateToProps = (state: ApplicationState) => state.editor

export default connect(mapStateToProps)(CreateSnippetComponent) as typeof CreateSnippetComponent
