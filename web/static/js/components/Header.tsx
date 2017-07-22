import * as React from 'react';
import {
  Container,
  Navbar,
  NavbarBrand
} from 'reactstrap';

interface HeaderState {
  // Is the header expanded or collapsed?
  isOpen: boolean
}

export default class Header extends React.Component<{}, HeaderState> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <Container>
            <NavbarBrand href="/">🚀 crater</NavbarBrand>
          </Container>
        </Navbar>
      </div>
    )
  }
}
