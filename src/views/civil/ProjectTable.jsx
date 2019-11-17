import React, { useState } from "react";
import { Card, CardHeader, CardBody, Table, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";

const ProjectTable = props => {
  const [searchTerm, setSearctTerm] = useState("");
  const data = props.data.filter(({ short_text }) =>
    short_text.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <Card className="shadow">
      <CardHeader className="border-0">
        <h3 className="mb-0">Project table</h3>
        <Input
          type="text"
          placeholder="Search project by name..."
          value={searchTerm}
          onChange={e => setSearctTerm(e.target.value)}
        />
      </CardHeader>
      <CardBody>
        <Table className="align-items-center table-flush" responsive>
          <thead className="thead-light">
            <tr>
              <th scope="col">Order</th>
              <th scope="col">Project</th>
              <th scope="col">Address</th>
              <th scope="col">Supervisor</th>
              <th scope="col">Started</th>
              <th scope="col">Completion</th>
            </tr>
          </thead>
          <tbody>
            {data.map((prop, ind) => (
              <tr>
                <td>
                  <Link to={"/civil/project/" + prop.order}>{prop.order}</Link>
                </td>
                <td>{prop.short_text}</td>
                <td>
                  {prop.map_data.candidates[0]
                    ? prop.map_data.candidates[0].formatted_address
                    : null}
                </td>
                <td>{prop.supervisor}</td>
                <td>{prop.start_limit_date}</td>
                <td>0 % </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default ProjectTable;
