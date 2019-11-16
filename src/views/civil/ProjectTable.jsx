import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Table
} from "reactstrap";


const ProjectTable = (props) => {

    const data = props.data;

    return (
        <Card className="shadow" >
            <CardHeader className="border-0">
                <h3 className="mb-0">Project table</h3>
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
                                <td>{prop.order}</td>
                                <td>{prop.short_text}</td>
                                <td>{prop.map_data.candidates[0] ? prop.map_data.candidates[0].formatted_address : null}</td>
                                <td>{prop.supervisor}</td>
                                <td>{prop.start_limit_date}</td>
                                <td>0 % </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    )
}

export default ProjectTable;
