/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";
import KPI from "../Charts/KPI";

const Header = ({ isCivil }) => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        {!isCivil && (
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <KPI
                  title="Eka"
                  value="100.00"
                  color="red"
                  secondaryTitle="Viime kuussa"
                  secondaryValue="5000000"
                  icon={<i className="fas fa-chart-pie" />}
                />
                <KPI
                  title="New users"
                  value="2,356"
                  color="orange"
                  secondaryTitle="Since last week"
                  secondaryValue="3.48%"
                  icon={<i className="fas fa-chart-bar" />}
                />
                <KPI
                  title="Employees"
                  value="924"
                  color="green"
                  secondaryTitle="Since yesterday"
                  secondaryValue="1.10%"
                  icon={<i className="fas fa-users" />}
                />
                <KPI
                  title="Performance"
                  value="69.5%"
                  color="blue"
                  secondaryTitle="Since last month"
                  secondaryValue="12%"
                  icon={<i className="fas fa-percent" />}
                />
              </Row>
            </div>
          </Container>
        )}
      </div>
    </>
  );
};

export default Header;
