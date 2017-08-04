import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Row, Col } from 'reactstrap'

export default class CreateSnippetComponent extends React.Component<RouteComponentProps<{}>, {}> {
  constructor(props) {
    super(props)
  }

  public render(): JSX.Element {
    return (
      <div>
        <h1>CreateSnippetComponent</h1>
      </div>
    )
  }
}
