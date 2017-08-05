import * as React from 'react'
import { Link } from 'react-router-dom'
import { Container, Navbar, NavbarBrand } from 'reactstrap'

export default class Root extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <Container fluid>
            <NavbarBrand tag={Link} to="/">🚀 crater</NavbarBrand>
          </Container>
        </Navbar>

        <Container className="mt-4">
          <main role="main">
            {this.props.children}
          </main>
        </Container>

        <footer className="mt-5">
          <hr/>
          <Container className="my-3">
            &copy; 2017 the blvd group
          </Container>
        </footer>
      </div>
    )
  }
}
