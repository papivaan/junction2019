import React from "react";
import { Container, Row, Col } from "reactstrap";

import Header from "../../components/Headers/Header.jsx";

const Dashboard = ({ match, location }) => {
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <h2>Civil</h2>
          </Col>
          <Col xl="4">
            <h2>Dashboard</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
