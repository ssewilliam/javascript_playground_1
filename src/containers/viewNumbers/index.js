import React, { Component } from 'react';
import { Table, Navbar, Container, Nav, Image } from 'react-bootstrap';
import image from '../assets/images/user.png';
import './index.scss';

class ViewNumbers extends Component {
  render() {
    return (
      <div>
        <div className="pb-header">
          <Container>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">Phonebook</Navbar.Brand>
              <Nav className="ml-auto">
                <Nav.Link className="pb-user-profile" href="#features">
                  <Image src={image} rounded />
                </Nav.Link>
                <Nav.Link className="pb-nav-link text-white" href="#logout">
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar>
          </Container>
        </div>
        <Container>
          <Table responsive>
            <thead>
              <tr className="text-center">
                <th>#</th>
                <th>Country Code</th>
                <th>Area Code</th>
                <th>Prefix</th>
                <th>Line Number</th>
                <th>Date Created</th>
                <th>Active</th>
              </tr>
            </thead>
          </Table>
        </Container>
      </div>
    );
  }
}
export default ViewNumbers;
