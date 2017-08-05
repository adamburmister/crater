import * as React from 'react'
import { Container, Navbar, NavbarBrand } from 'reactstrap'

export default class Root extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <Container fluid>
            <NavbarBrand href="/">🚀 crater</NavbarBrand>
          </Container>
        </Navbar>

        <Container className="mt-4">
          <main role="main">
            {this.props.children}
          </main>
        </Container>
      </div>
    )
  }
}
