import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header"
import WorldInfo from "./components/WorldInfo/";
import ExtraCountries from "./components/ExtraCountries/";
import GraphURL from "./components/GraphURL/";
import CountryInfo from "./components/CountrySearch/";
import SafteyInfo from "./components/SafteyInfo/"
import Footer from "./components/Footer/index"
import "./App.css";

class App extends Component {
    state = {
      countryName: ["USA", "Italy", "S. Korea"]
    };


  render() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
      </Container>
<Container fluid>
        <Row>
          <Col xs={12} sm={8} md={5} lg={5} xl={5}>
              <WorldInfo/>
              {this.state.countryName.map(country => (
              <ExtraCountries key={country} countryName ={country}/>
              ))}
          </Col>

          <Col xs={12} sm={4} md={3} lg={3} xl={3} className="GraphAndSearch">
            
              <GraphURL/>
              <CountryInfo />
          
          </Col>

          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                <SafteyInfo/>
          </Col>

        </Row>
        </Container>
      <Container fluid>
        <Row>
          <Col>
            <Footer/>
          </Col>
        </Row>
      </Container>
    </div>
  );
  }
}

export default App;
