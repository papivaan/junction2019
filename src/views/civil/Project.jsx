import React from 'react';
import { Card, CardHeader, CardBody, Row, Col, Container, Table } from "reactstrap";
import Header from "../../components/Headers/Header.jsx";
import { useData } from "../../contexts/data-context";
import SingleMarkerMap from '../../components/Maps/SingleMarkerMap.jsx';


const ProjectView = (props) => {
    const { data } = useData();

    var orders = data.filter(project => project.order == props.match.params.id);
    var order = orders.length > 0 ? orders[0] : undefined;


    return (
        <>
            <Header isCivil />
            {order &&
                <Container className="mt--7" fluid>
                    <Row>
                        <Col xl="8">
                            <Card className="shadow border-0">
                                <CardHeader>
                                    <h3 className="mb-0">{props.match.params.id} {order.short_text}</h3>
                                </CardHeader>
                                <CardBody>
                                    <Table className="align-items-center table-flush" responsive>
                                        <tbody>
                                            <tr>
                                                <td>Description</td>
                                                <td>{order.description}</td>
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
                                                <td>{order.end_limit_date ? order.end_limit_date : 'TBC'}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
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
            }
        </>
    )
}

export default ProjectView;
