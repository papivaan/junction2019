import React from 'react';
import { Card, CardHeader, CardBody, Row } from "reactstrap";
import {Doughnut, Pie} from 'react-chartjs-2';




const PieChart = (props) => {

    const data = {
        labels: [
            'Red',
            'Green',
            'Yellow'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
    };


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
                    <Pie data={data} />
                </div>
            </CardBody>
        </Card>
    )
}


export default PieChart;
