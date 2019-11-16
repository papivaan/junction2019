import React from "react";
import {
  Button,
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useHistory } from "react-router-dom";

import Header from "../../components/Headers/Header.jsx";

import { listEmployees } from "../../graphql/queries";

const Dashboard = ({ match, location }) => {
  const { data, loading, error } = useQuery(
    gql`
      ${listEmployees}
    `
  );

  const history = useHistory();

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row className="mb-4">
          <Col sm="12">
            <Card>
              <CardHeader>
                <h1>Employees</h1>
              </CardHeader>
              <CardBody>
                <p>Select employee to find more details of them</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          {data &&
            data.listEmployees &&
            data.listEmployees.items.map(item => (
              <Col lg="4" md="6">
                <Card body>
                  <CardTitle>
                    <h2>{item.name}</h2>
                  </CardTitle>
                  <Button onClick={() => history.push(`/employee/${item.id}`)}>
                    View more
                  </Button>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
