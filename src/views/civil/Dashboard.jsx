import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useData } from "../../contexts/data-context"
import Header from "../../components/Headers/Header.jsx";

import _ from "lodash";

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

  const filteredData = _.uniqBy(data, "short_text");
  console.log(filteredData);
  return (
    <>
      <Header isCivil />
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <h2>Current worksites:</h2>
          </Col>
        </Row>
        {filteredData.map((d, i) => {
          return (
            <Row
              key={i}
              style={hover ?
                { marginBottom: '10px', cursor: 'pointer' } :
                { marginBottom: '10px' }
              }
              onClick={() =>
                openSite !== d.short_text ?
                  setOpenSite(d.short_text) :
                  setOpenSite(undefined)}
              onMouseOver={() => setHover(true)}
              onMouseOut={() => setHover(false)}>
              <Col className="mb-xl-0" xl="8">
                <h3>{d.short_text}</h3>
              </Col>
              {openSite === d.short_text && (<Col className="mb-xl-0" xl="8">
                {data.filter(d => d.short_text === openSite).map((d, i) => {
                  return (
                    <div
                      key={i}
                      style={style}>
                      <div>{d.description}</div>
                      <div>{`Supervisor: ${d.supervisor}`}</div>
                      <div>PROGRESS: N/A</div>
                    </div>
                  )
                })}
              </Col>)}
            </Row>
          )
        })}
      </Container>
    </>
  );
};

export default Dashboard;
