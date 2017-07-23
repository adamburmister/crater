import * as React from 'react'
import { Container } from 'reactstrap'
import Header from '../components/Header'

export default class AppContainer extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <div>
        <Header />

        <Container className="mt-4">
          <main role="main">
            {this.props.children}
          </main>
        </Container>
      </div>
    )
  }
}
