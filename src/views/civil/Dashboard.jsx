import React, { useState } from "react";
import { Container, Row, Col, Card } from "reactstrap";
import { useData } from "../../contexts/data-context"
import Header from "../../components/Headers/Header.jsx";
import Map from "../../components/Maps/Map.jsx";

import _ from "lodash";
import ProjectTable from "./ProjectTable";

const style = {
  marginBottom: '10px',
  backgroundColor: '#ced4da',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  borderRadius: '4px'
};

const Dashboard = ({ match, location }) => {
  const { data } = useData();
  const [openSite, setOpenSite] = useState();
  const [hover, setHover] = useState(false);

  var filteredData = data.filter(work => work.end_limit_date.length < 1);

  console.log(filteredData);
  //const filteredData = _.uniqBy(data, "short_text");

  const dataBySites = _.values(_.groupBy(data.filter(d => !!d.location), "location.lat"));

  return (
    <>
      <Header isCivil />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow border-0">
              <Map data={dataBySites} />
            </Card>
          </div>
        </Row>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="12">
            <ProjectTable
              data={filteredData}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
