import React, { useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  Table,
  Input,
  Badge
} from 'reactstrap';


const initialTask = {
  orderId: '',
  description: '',
  employee: ''
}

const TaskCard = ({tasks, onCreateTask}) => {
  const [isCreating, setCreate] = useState(false)
  const [task, setTask] = useState({ ...initialTask })
  console.log(task)
  return(
    <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Tasks</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Order_ID</th>
                    <th scope="col">Description</th>
                    <th scope="col">Assignee</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Placeholder</td>
                    <td>Placeholder</td>
                    <td>Placeholder</td>
                    <td>Placeholder</td>
                  </tr>
                  {isCreating && (
                    <tr>
                      <td>
                        <Input
                          type="select"
                          value={task.orderId}
                          onChange={(e) => setTask({ ...task, orderId: e.target.value })}
                          placeholder="Select order ID">
                          {/* map orderIds here */}
                          <option>1234567</option>
                          <option>12341245167</option>
                          <option>12345fsgag7</option>
                          <option>1234qwert67</option>
                        </Input>
                      </td>
                      <td>
                        <Input
                          type="textarea"
                          placeholder="Description of the task"
                          value={task.description}
                          onChange={(e) => setTask({ ...task, description: e.target.value })} />
                      </td>
                      <td>
                        <Input
                          type="select"
                          placeholder="Employee"
                          value={task.employee}
                          onChange={(e) => setTask({ ...task, employee: e.target.value })}
                        >
                          {/* map employee names */}
                          <option>Ake</option>
                          <option>Make</option>
                          <option>Pera</option>
                          <option>Mä</option>
                        </Input>
                      </td>
                      <td><Badge style={{ width: '80%' }} color="info">pending</Badge></td>
                    </tr>
                  )}
                </tbody>
              </Table>
              <CardFooter style={{ display: 'flex', justifyContent: 'flex-end' }}>
                {isCreating && (<Button color="primary" style={{ marginRight: '10px' }} onClick={() => setCreate(false)}>Cancel</Button>)}
                <Button
                  color="info"
                  disabled={
                    isCreating &&
                    task.description.length < 5 &&
                    task.employee.length < 1 &&
                    task.orderId.length < 1
                  }
                  onClick={() =>
                    isCreating ?
                      () => {
                        onCreateTask(task);
                        setCreate(false);
                        } :
                      setCreate(true)}>Create new task</Button>
              </CardFooter>
            </Card>
          </div>
  )
} 

export default TaskCard;