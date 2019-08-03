import React, { Component } from 'react';
import { Table, Navbar, Container, Nav, Image, Row } from "react-bootstrap";
import image from '../../assets/images/user.png';
import './index.scss';

class ViewNumbers extends Component {
  render() {
    return (
      <div>
        <div className="pb-header">
          <Container>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="/">Phonebook</Navbar.Brand>
              <Nav className="ml-auto">
                <Nav.Link className="pb-user-profile" href="#features">
                  <Image src={image} rounded />
                </Nav.Link>
                <Nav.Link className="pb-nav-link text-white" href="/login">
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar>
          </Container>
        </div>
        <Container>
          <Row className="pb-mgt-20">
            <div className="col-sm-3 text-center">
              <div className="pb-card-stat">
                <h5>Total Numbers</h5>
                <h2>9540000</h2>
                <small>Last down 42 days ago</small>
              </div>
            </div>
            <div className="col-sm-3 text-center">
              <div className="pb-card-stat">
                <h5>First Number</h5>
                <h2>079379205</h2>
                <small>Last down 42 days ago</small>
              </div>
            </div>
            <div className="col-sm-3 text-center">
              <div className="pb-card-stat">
                <h5>Last Number</h5>
                <h2>079389205</h2>
                <small>Last down 42 days ago</small>
              </div>
            </div>
            <div className="col-sm-3 text-center">
              <div className="pb-card-stat">
                <h5>Active Numbers</h5>
                <h2>9830</h2>
                <small>Last down 2 days ago</small>
              </div>
            </div>
          </Row>
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
