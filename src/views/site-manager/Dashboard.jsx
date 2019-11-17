import React, { useState } from "react";
import { Container, Row, Col, Card } from "reactstrap";

import Header from "../../components/Headers/Header.jsx";
import Map from "../../components/Maps/Map";
import TaskCard from "./TaskCard";
import ProjectTable from "../civil/ProjectTable";

import { useData } from "../../contexts/data-context";
import _ from "lodash";

const Dashboard = ({ match, location }) => {
  const { data } = useData();
  var filteredData = data.filter(
    work =>
      work.end_limit_date.length < 1 && work.supervisor === match.params.id
  );

  const dataBySites = _.values(
    _.groupBy(
      data.filter(d => !!d.location && d.supervisor === match.params.id),
      "location.lat"
    )
  ).slice(200);

  const orders = _.flatMap(dataBySites, d => d).map(d => ({
    text: d.short_text,
    id: d.order
  }));

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row style={{ marginBottom: "20px" }}>
          <TaskCard orders={orders} />
        </Row>
        <Row>
          <div className="col">
            <Card className="shadow border-0">
              <Map data={dataBySites} />
            </Card>
          </div>
        </Row>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="12">
            <ProjectTable data={filteredData} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
