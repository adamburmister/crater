import * as React from 'react'
import { connect } from 'react-redux'
import { Route, RouteComponentProps } from 'react-router-dom'

import SnippetsComponent from '../components/Snippets'
import SnippetComponent from '../components/Snippet'

export default class SnippetsContainer extends React.Component<RouteComponentProps<{}>, {}> {
  constructor(props) {
    super(props)
  }

  public render(): JSX.Element {
    return (
      <div>
        {/* why the fuck do react-router devs think this is a good idea... */}
        <Route exact path={this.props.match.path} component={SnippetsComponent} />
        <Route path={`${this.props.match.path}/:id`} component={SnippetComponent} />
      </div>
    )
  }
}
