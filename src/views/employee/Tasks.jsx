import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
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
import { updateTask, deleteTask } from "../../graphql/mutations";

import Header from "../../components/Headers/Header.jsx";

import sendSMS from "../../utils/sendSMS";

const Tasks = ({ match }) => {
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
        <Task key={item.id} {...item} />
      ))}
    </>
  );
};

const Task = ({ id, description, orderId, status }) => {
  const [update] = useMutation(
    gql`
      ${updateTask}
    `
  );

  const [del] = useMutation(
    gql`
      ${deleteTask}
    `
  );

  const handleClick = status => {
    switch (status) {
      case "PENDING":
        sendSMS({
          phone: "+358500255967",
          orderId: "123",
          description: status
        });
        update({
          variables: {
            input: {
              id,
              status: "IN_PROGRESS"
            }
          }
        });
        break;

      case "IN_PROGRESS":
        update({
          variables: {
            input: {
              id,
              status: "DONE"
            }
          }
        });
        break;

      case "DONE":
        del({
          variables: {
            input: {
              id
            }
          }
        });
        break;

      default:
        break;
    }
  };

  const renderButtonText = () => {
    switch (status) {
      case "PENDING":
        return "Take task";

      case "IN_PROGRESS":
        return "Make done";

      case "DONE":
        return "Delete";

      default:
        break;
    }
  };

  return (
    <Card body className="mt-2 mb-2">
      <CardTitle>
        <h3>{description}</h3>
      </CardTitle>
      <CardText>Order: {orderId}</CardText>
      <Button onClick={() => handleClick(status)}>{renderButtonText()}</Button>
    </Card>
  );
};

export default Tasks;
