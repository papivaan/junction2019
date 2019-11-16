import React from "react";
import {
  Button,
  Card,
  CardHeader,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

import Header from "../../components/Headers/Header.jsx";

const Dashboard = ({ match, location }) => {
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <h2>kakkaa</h2>
          </Col>
          <Col xl="4">
            <h2>kukkuu</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
