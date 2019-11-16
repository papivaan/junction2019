import React, { useState } from "react";
import {
  Container,
  Row,
  Card
} from "reactstrap";

import Header from "../../components/Headers/Header.jsx";
import Map from '../../components/Maps/Map';
import TaskCard from './TaskCard'

import { useData } from "../../contexts/data-context"
import _ from "lodash"

const Dashboard = ({ match, location }) => {
  console.log(match.params.id)
  const { data } = useData();
  const dataBySites = _.values(_.groupBy(data.filter(d => !!d.location && d.supervisor === match.params.id), "location.lat"));

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
      <Row style={{ marginBottom: '20px' }}>
          <TaskCard tasks={undefined} onCreateTask={(task) => console.log(task)}/>
        </Row>
        <Row>
            <div className="col">
            <Card className="shadow border-0">
              <Map data={dataBySites} />
            </Card>
          </div>
        </Row>
        
      </Container>
    </>
  );
};

export default Dashboard;
