import React, { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  Table,
  Input,
  Badge
} from "reactstrap";

import { useQuery, useMutation } from "@apollo/react-hooks";
import { listTasks, listEmployees } from "../../graphql/queries";
import { createTask } from "../../graphql/mutations";
import gql from "graphql-tag";

const PendingBadge = () => (
  <Badge style={{ width: "80%" }} color="light">
    pending
  </Badge>
);
const InProgressBadge = () => (
  <Badge style={{ width: "80%" }} color="primary">
    in progress
  </Badge>
);
const DoneBadge = () => (
  <Badge style={{ width: "80%" }} color="success">
    done
  </Badge>
);

const initialTask = {
  orderId: "",
  orderText: undefined,
  description: "",
  employeeId: ""
};

const statusBadge = status => {
  switch (status) {
    case "PENDING":
      return <PendingBadge />;
      break;
    case "IN_PROGRESS":
      return <InProgressBadge />;
      break;
    case "DONE":
      return <DoneBadge />;
      break;
    default:
      return <PendingBadge />;
  }
};

const TaskCard = ({ orders }) => {
  let employees = [];
  let filteredTasks = [];
  const { data: taskData, loading: tasksLoading } = useQuery(
    gql`
      ${listTasks}
    `,
    { pollInterval: 1000 }
  );
  const { data: employeeData, loading: employeesLoading } = useQuery(
    gql`
      ${listEmployees}
    `
  );
  const [createTaskMutation, { data: mutationData }] = useMutation(
    gql`
      ${createTask}
    `
  );

  const [isCreating, setCreate] = useState(false);
  const [task, setTask] = useState({ ...initialTask });

  if (!employeesLoading && employeeData && employeeData.listEmployees)
    employees = employeeData.listEmployees.items;
  if (!tasksLoading && taskData && taskData.listTasks)
    filteredTasks = taskData.listTasks.items.filter(task =>
      orders.some(o => o.id === task.orderId)
    );
  if (task.orderId === "" && orders.length >= 1)
    setTask({ ...task, orderId: orders[0].id, orderText: orders[0].text });
  if (task.employeeId === "" && employees.length >= 1)
    setTask({ ...task, employeeId: employees[0].id });

  return (
    <div className="col">
      <Card className="shadow">
        <CardHeader className="border-0">
          <h3 className="mb-0">Tasks</h3>
        </CardHeader>
        <Table className="align-items-center table-flush" responsive>
          <thead className="thead-light">
            <tr>
              <th scope="col">Site</th>
              <th scope="col">Order_ID</th>
              <th scope="col">Description</th>
              <th scope="col">Assignee</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task, i) => (
              <tr key={i}>
                <td>{orders.find(o => o.id === task.orderId).text}</td>
                <td>{task.orderId}</td>
                <td>{task.description}</td>
                <td>{task.assignee.name}</td>
                <td>{statusBadge(task.status)}</td>
              </tr>
            ))}
            {isCreating && (
              <tr key="add-row">
                <td>
                  <Input
                    type="select"
                    value={task.orderText}
                    onChange={e => {
                      const id = orders.find(o => o.text === e.target.value).id;
                      setTask({
                        ...task,
                        orderText: e.target.value,
                        orderId: id
                      });
                    }}
                  >
                    {orders.map(order => (
                      <option key={order.id}>{order.text}</option>
                    ))}
                  </Input>
                </td>
                <td>
                  <Input
                    type="select"
                    value={task.orderId}
                    onChange={e => {
                      const text = orders.find(
                        o => o.id.toString() === e.target.value
                      ).text;
                      setTask({
                        ...task,
                        orderId: Number(e.target.value),
                        orderText: text
                      });
                    }}
                    placeholder="Select order ID"
                  >
                    {orders.map(order => (
                      <option key={order.id}>{order.id}</option>
                    ))}
                  </Input>
                </td>
                <td>
                  <Input
                    type="textarea"
                    placeholder="Description of the task"
                    value={task.description}
                    onChange={e =>
                      setTask({ ...task, description: e.target.value })
                    }
                  />
                </td>
                <td>
                  <Input
                    type="select"
                    placeholder="Employee"
                    value={
                      employees.some(emp => emp.id === task.employeeId)
                        ? employees.find(emp => emp.id === task.employeeId).name
                        : task.employeeId
                    }
                    onChange={e => {
                      setTask({
                        ...task,
                        employeeId: employees.find(
                          emp => emp.name === e.target.value
                        ).id
                      });
                    }}
                  >
                    {/* map employee names */}
                    {employees.map(e => (
                      <option>{e.name}</option>
                    ))}
                  </Input>
                </td>
                <td>
                  <PendingBadge />
                </td>
              </tr>
            )}
          </tbody>
        </Table>
        <CardFooter style={{ display: "flex", justifyContent: "flex-end" }}>
          {isCreating && (
            <Button
              color="primary"
              style={{ marginRight: "10px" }}
              onClick={() => setCreate(false)}
            >
              Cancel
            </Button>
          )}
          {isCreating && (
            <Button
              color="info"
              disabled={isCreating && task.description.length < 5}
              onClick={() => {
                createTaskMutation({
                  variables: {
                    input: {
                      orderId: task.orderId,
                      description: task.description,
                      status: "PENDING",
                      taskAssigneeId: task.employeeId
                    }
                  }
                });
                setCreate(false);
              }}
            >
              Create
            </Button>
          )}
          {!isCreating && (
            <Button color="info" onClick={() => setCreate(true)}>
              Create new task
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default TaskCard;
