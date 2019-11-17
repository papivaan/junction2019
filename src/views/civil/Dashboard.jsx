import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import { useData } from "../../contexts/data-context";
import Header from "../../components/Headers/Header.jsx";
import Map from "../../components/Maps/Map.jsx";

import _ from "lodash";
import ProjectTable from "./ProjectTable";

const Dashboard = ({ match, location }) => {
  const { data } = useData();

  var filteredData = data.filter(work => work.end_limit_date.length < 1);

  const dataBySites = _.values(
    _.groupBy(
      data.filter(d => !!d.location),
      "location.lat"
    )
  );

  return (
    <>
      <Header isCivil />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col mb-4">
            <Card className="shadow border-0">
              <Map data={dataBySites} isCivil />
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
