import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, CardHeader, CardBody, Row } from "reactstrap";


const MixedChart = (props) => {

    const colors = ["#b71c1c", "#0d47a1"];
    const data = props.data;

    data.datasets = data.datasets.map((val, ind) => {
        val.backgroundColor = colors[ind];
        val.borderColor = colors[ind];
        val.fill = false;
        return val;
    })


    return (
        <Card className="shadow">
            <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                    <div className="col">
                        <h6 className="text-uppercase text-muted ls-1 mb-1">{props.subtitle}</h6>
                        <h2 className="mb-0">{props.title}</h2>
                    </div>
                </Row>
            </CardHeader>
            <CardBody>
                {/* Chart */}
                <div className="chart">
                    <Bar
                        data={data}
                    />
                </div>
            </CardBody>
        </Card>
    )
}

export default MixedChart;
