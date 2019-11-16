import React from 'react';
import { Card, CardHeader, CardBody, Row } from "reactstrap";
import { Pie } from 'react-chartjs-2';




const PieChart = (props) => {

    var values = [];
    var backgroundColors = [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#00e676'
    ];
    var hoverBackgroundColors = [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#00e676'
    ];

    var labels = props.data.map((val, ind) => {
        values.push(val.value);
        return (val.label);
    })

    const data = {
        labels: labels,
        datasets: [{
            data: values,
            backgroundColor: backgroundColors.slice(0, props.data.length),
            hoverBackgroundColor: hoverBackgroundColors.slice(0, props.data.length)
        }]
    };

    console.log(data);


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
                <div className="chart" style={{ padding: "35px 35px 0 35px" }}>
                    <ul style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        padding: 0
                    }}>
                        {labels.map((prop, ind) => (
                            <li
                                style={{
                                    letterSpacing: "normal",
                                    padding: 8,
                                    float: "left",
                                    display: "block",
                                    fontSize: 11
                                }}>
                                <span style={{
                                    height: '0.75em',
                                    width: '0.75em',
                                    marginRight: '0.5em',
                                    backgroundColor: backgroundColors[ind],
                                    borderRadius: '50%',
                                    display: 'inline-block'
                                }}></span>
                                {prop}</li>
                        ))}
                    </ul>
                    <Pie data={data} />
                </div>
            </CardBody>
        </Card>
    )
}


export default PieChart;
