import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Row,
  Col
} from "reactstrap";

import { getEmployee } from "../../graphql/queries";

import Header from "../../components/Headers/Header.jsx";

const Tasks = ({ match, location }) => {
  const { loading, error, data } = useQuery(
    gql`
      ${getEmployee}
    `,
    {
      pollInterval: 2000,
      variables: {
        id: match.params.id
      }
    }
  );

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        {loading && <p>Loading...</p>}
        {error && <p>Error occured :(</p>}
        {data && <EmployeeInfo {...data} />}
      </Container>
    </>
  );
};

const EmployeeInfo = props => {
  const { name, phone, tasks } = props.getEmployee;
  const tasksPending =
    tasks.items.filter(task => task.status === "PENDING") || [];
  const tasksInProgress =
    tasks.items.filter(task => task.status === "IN_PROGRESS") || [];
  const tasksDone = tasks.items.filter(task => task.status === "DONE") || [];

  return (
    <>
      <Row>
        <Col sm="12">
          <Card>
            <CardHeader>
              <h2>{name}</h2>
            </CardHeader>
            <CardBody>
              <p>
                Tel: <a href={`tel:${phone}`}>{phone}</a>
              </p>
              <Row>
                <Col lg="4">
                  <h3>Tasks pending: {tasksPending.length}</h3>
                </Col>
                <Col lg="4">
                  <h3>Tasks in progress: {tasksInProgress.length}</h3>
                </Col>
                <Col lg="4">
                  <h3>Tasks done: {tasksDone.length}</h3>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col lg="4">
          <TaskCategory title="Pending" items={tasksPending} />
        </Col>
        <Col lg="4">
          <TaskCategory title="In progress" items={tasksInProgress} />
        </Col>
        <Col lg="4">
          <TaskCategory title="Done" items={tasksDone} />
        </Col>
      </Row>
    </>
  );
};

const TaskCategory = ({ title, items }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <h2>{title}</h2>
        </CardHeader>
      </Card>
      {items.map(item => (
        <Card body className="mt-2 mb-2">
          <CardTitle>
            <h3>{item.description}</h3>
          </CardTitle>
          <CardText>
            <p>Order: {item.orderId}</p>
          </CardText>
          <Button onClick={() => console.log(item.status)}>Button</Button>
        </Card>
      ))}
    </>
  );
};

export default Tasks;
