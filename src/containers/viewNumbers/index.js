import React, { Component } from "react";
import {
  Table,
  Navbar,
  Container,
  Nav,
  Image,
  Row,
  Alert
} from "react-bootstrap";
import moment from "moment";
import { CSVLink} from 'react-csv';
import { Input } from "../generateNumbers";
import { generateNumbers } from "../../helpers/numberGenerator";
import image from "../../assets/images/user.png";
import "./index.scss";

class ViewNumbers extends Component {
  state = {
    Numbers: undefined,
    counter: undefined,
    range: undefined,
    hasError: false
  };

  newNumberRage = event => {
    let range = event.target.value;
    if (range.trim() === "" || isNaN(range) || range < 1 || range > 10000) {
      return this.handleSetShow(true);
    }
    this.setState({
      range: event.target.value,
      counter: 1,
      hasError: false
    });
  };

  handleGenerate(counter, range) {
    if (!range || !counter) {
      return this.handleSetShow(true);
    }
    this.setState({
      Numbers: generateNumbers(counter, range)
    });
  }

  handleSetShow(newState) {
    this.setState({
      hasError: newState
    });
  }

  render() {
    const { Numbers, range, counter, hasError } = this.state;

    let headers = [
      { label: "Contact Id ", key: "pbId" },
      { label: "Number", key: "pbNumber" },
      { label: "Country Code", key: "pbCountryCode" },
      { label: "Area Code", key: "pbAreaCode" },
      { label: "Number Prefix", key: "pbPrefix" },
      { label: "Is Contact Active", key: "pbActive" }
    ];
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
            <div className="col-md-5 pb-mgt-20">
              <h3>Generated Numbers</h3>
            </div>
            <div className="col-md-7 pb-mgt-20">
              <Input
                generateNumbers={() => this.handleGenerate(counter, range)}
                newNumberRage={this.newNumberRage}
              />
              {hasError && (
                <Alert
                  variant="danger"
                  onClose={() => this.handleSetShow(false)}
                  dismissible
                  id="numberChanged"
                >
                  <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                  <p>Please enter a valid amount of contacts to generate</p>
                </Alert>
              )}
            </div>
            <div className="col-md-3 col-xs-12 text-center">
              <div className="pb-card-stat">
                <h5>Total Numbers</h5>
                <h2>{(Numbers && range) || 0}</h2>
                <small>{moment(Date.now()).fromNow()}</small>
              </div>
            </div>
            <div className="col-md-3 col-xs-12 text-center">
              <div className="pb-card-stat">
                <h5>First Number</h5>
                <h2>
                  {(Numbers && Numbers[0] && Numbers[0].pbNumber) || "N/A"}
                </h2>
                <small>{moment(Date.now()).fromNow()}</small>
              </div>
            </div>
            <div className="col-md-3 col-xs-12 text-center">
              <div className="pb-card-stat">
                <h5>Last Number</h5>
                <h2>
                  {(Numbers &&
                    Numbers[Numbers.length - 1] &&
                    Numbers[Numbers.length - 1].pbNumber) ||
                    "N/A"}
                </h2>
                <small>{moment(Date.now()).fromNow()}</small>
              </div>
            </div>
            <div className="col-md-3 col-xs-12 text-center">
              <div className="pb-card-stat">
                <h5>Active Numbers</h5>
                <h2>{(Numbers && range) || 0}</h2>
                <small>{moment(Date.now()).fromNow()}</small>
              </div>
            </div>
          </Row>
          <div className="text-right  pb-mgt-20">
            {Numbers && (
              <CSVLink
                data={Numbers}
                headers={headers}
                filename={"Phonebook-log.csv"}
                className="btn btn-dark"
              >
                Export to CSV
              </CSVLink>
            )}
          </div>
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
            <tbody>
              {Numbers &&
                Numbers.map((number, index) => (
                  <tr className="text-center" key={number.pbId}>
                    <td>{index + 1}</td>
                    <td>{number.pbCountryCode}</td>
                    <td>{number.pbAreaCode}</td>
                    <td>{number.pbPrefix}</td>
                    <td>{`0${number.pbNumber}`}</td>
                    <td>{moment(Date.now()).fromNow()}</td>
                    <td>Active</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}
export default ViewNumbers;
