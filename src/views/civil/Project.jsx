import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Container,
  Table,
  Progress
} from "reactstrap";
import Header from "../../components/Headers/Header.jsx";
import { useData } from "../../contexts/data-context";
import SingleMarkerMap from "../../components/Maps/SingleMarkerMap.jsx";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { listTasks } from "../../graphql/queries";

const ProjectView = props => {
  const { data } = useData();

  const orderId = props.match.params.id;

  const orders = data.filter(project => project.order == orderId);
  const order = orders.length > 0 ? orders[0] : undefined;

  return (
    <>
      <Header isCivil />
      {order && (
        <Container className="mt--7" fluid>
          <Row>
            <Col xl="8" className="mb-4">
              <Card className="shadow border-0">
                <CardHeader>
                  <h3 className="mb-0">
                    {props.match.params.id} {order.short_text}
                  </h3>
                </CardHeader>
                <CardBody>
                  <Table
                    className="align-items-center table-flush mb-4"
                    responsive
                  >
                    <tbody>
                      <tr>
                        <td>Description</td>
                        <td>{order.description}</td>
                      </tr>
                      <tr>
                        <td>Address</td>
                        <td>
                          {order.map_data.candidates[0]
                            ? order.map_data.candidates[0].formatted_address
                            : null}
                        </td>
                      </tr>
                      <tr>
                        <td>Supervisor</td>
                        <td>{order.supervisor}</td>
                      </tr>
                      <tr>
                        <td>Start date</td>
                        <td>{order.start_limit_date}</td>
                      </tr>
                      <tr>
                        <td>Ending date</td>
                        <td>
                          {order.end_limit_date ? order.end_limit_date : "TBC"}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <TaskProgress orderId={orderId} />
                </CardBody>
              </Card>
            </Col>
            <Col xl="4">
              <Card className="shadow border-0">
                <SingleMarkerMap location={order.location} />
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

const TaskProgress = ({ orderId }) => {
  const { data: tasksData, loading } = useQuery(
    gql`
      ${listTasks}
    `,
    { pollInterval: 2000, variables: { filter: { orderId: { eq: orderId } } } }
  );

  return !loading && tasksData && <ProgressBar {...tasksData} />;
};

const ProgressBar = ({ listTasks: { items }, ...props }) => {
  if (items.length <= 0) return <div className="text-center">No tasks</div>;

  const calculatePercentage = count => (count / items.length) * 100;
  const tasksPending = items.filter(task => task.status === "PENDING") || [];
  const tasksInProgress =
    items.filter(task => task.status === "IN_PROGRESS") || [];
  const tasksDone = items.filter(task => task.status === "DONE") || [];

  const pendingPercentage = calculatePercentage(tasksPending.length);
  const progressPercentage = calculatePercentage(tasksInProgress.length);
  const donePercentage = calculatePercentage(tasksDone.length);

  return (
    <>
      <div className="text-center">
        {donePercentage.toFixed(2)}% done, {progressPercentage}% in progress
      </div>
      <Progress multi {...props}>
        <Progress bar color="success" value={donePercentage} />
        <Progress bar color="primary" value={progressPercentage} />
        <Progress bar color="light" value={pendingPercentage} />
      </Progress>
    </>
  );
};

export default ProjectView;
