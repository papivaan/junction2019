import React from "react";
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row,
} from "reactstrap";
import Header from "../../components/Headers/Header.jsx";
import Map from '../../components/Maps/Map'
import { useData } from "../../contexts/data-context"
import _ from "lodash"

const Dashboard = ({ match, location }) => {
  const { data } = useData();
  const dataBySites = _.values(_.groupBy(data.filter(d => !!d.location), "location.lat"));

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row style={{ marginBottom: '20px' }}>
          <div className="col">
            <Card className="shadow border-0">
              <Map data={dataBySites} />
            </Card>
          </div>
        </Row>
        <Row style={{ marginBottom: '20px' }}>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Projects</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Site</th>
                    <th scope="col">Acctuals</th>
                    <th scope="col">Number of orders</th>
                    <th scope="col">Supervisors</th>
                    <th scope="col">Completion</th>
                  </tr>
                </thead>
                <tbody>
                  {dataBySites.map((data) => {
                    let obj = {}
                    const site = data.reduce((acc, crr, i) => {
                      if (i === 1) obj = { name: crr.short_text, acctuals: 0, orders: 0, supervisors: '', completion: '0%' }
                      if (isNaN(parseFloat(crr.total_amount_acctuals))) {
                        obj.acctuals += 0
                      } else {
                        obj.acctuals += parseFloat(crr.total_amount_acctuals)
                      }
                      obj.orders += 1;
                      if (!obj.supervisors.includes(crr.supervisor)) obj.supervisors = obj.supervisors + ',' + crr.supervisor;
                      return obj;
                    });
                    return (<tr>
                      <td>{site.name}</td>
                      <td>{site.acctuals}</td>
                      <td>{site.orders}</td>
                      <td>{site.supervisors}</td>
                      <td>{site.completion}</td>
                    </tr>)
                  }
                  )}
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;

