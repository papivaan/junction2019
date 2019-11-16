import React from "react";
import { Bar } from "react-chartjs-2";
import { Card, CardHeader, CardBody, Row } from "reactstrap";

import { chartExample2 } from "../../variables/charts.jsx";

const BarChart = () => {
  return (
    <Card className="shadow">
      <CardHeader className="bg-transparent">
        <Row className="align-items-center">
          <div className="col">
            <h6 className="text-uppercase text-muted ls-1 mb-1">Performance</h6>
            <h2 className="mb-0">Total orders</h2>
          </div>
        </Row>
      </CardHeader>
      <CardBody>
        {/* Chart */}
        <div className="chart">
          <Bar data={chartExample2.data} options={chartExample2.options} />
        </div>
      </CardBody>
    </Card>
  );
};

export default BarChart;
