import React from "react";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

function KPI(props) {
    return (<Col lg="6" xl="3">
        <Card className="card-stats mb-4 mb-xl-0">
            <CardBody>
                <Row>
                    <div className="col">
                        <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                        >
                            {props.title}
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                            {props.value}
                        </span>
                    </div>
                    <Col className="col-auto">
                        <div className="icon icon-shape text-white rounded-circle shadow" style={{backgroundColor: props.color}}>
                            {props.icon}
                        </div>
                    </Col>
                </Row>
                <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> {props.secondaryValue}
                        </span>{" "}
                    <span className="text-nowrap">{props.secondaryTitle}</span>
                </p>
            </CardBody>
        </Card>
    </Col>);
}

export default KPI;