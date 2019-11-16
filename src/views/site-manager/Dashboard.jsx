import React from "react";
import {
  Container, Row, Col, Card,
  CardHeader,
  CardFooter, Table,
} from "reactstrap";

import Header from "../../components/Headers/Header.jsx";

const Dashboard = ({ match, location }) => {
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Projects</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Project</th>
                    <th scope="col">Order</th>
                    <th scope="col">Status</th>
                    <th scope="col">Assignee</th>
                    <th scope="col">Completion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Placeholder</td>
                    <td>Placeholder</td>
                    <td>Placeholder</td>
                    <td>Placeholder</td>
                    <td>Placeholder</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
