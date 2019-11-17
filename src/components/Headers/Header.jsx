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
                  title="Open orders"
                  value="242"
                  color="red"
                  icon={<i className="ni ni-archive-2" />}
                  secondaryTitle="new opened this week"
                  secondaryValue="16"
                  secondaryClassName="text-primary mr-2"
                  secondaryIcon={<i className="fa fa-arrow-right" />}
                />
                <KPI
                  title="Tasks completed daily"
                  value="73"
                  color="orange"
                  secondaryTitle="daily average"
                  secondaryValue="85,3"
                  secondaryClassName="text-info mr-2"
                  secondaryIcon={<i className="fa fa-arrow-up" />}
                  icon={<i className="ni ni-check-bold" />}
                />
                <KPI
                  title="Customer satisfaction"
                  value="69.5%"
                  color="blue"
                  secondaryTitle="Better than last month"
                  secondaryValue="6,0 %"
                  secondaryClassName="text-success mr-2"
                  secondaryIcon={<i className="fa fa-arrow-up" />}
                  icon={<i className="ni ni-satisfied" />}
                />
                <KPI
                  title="Invoicing this month"
                  value="364 301 €"
                  color="blue"
                  secondaryTitle="Higher than estimate"
                  secondaryValue="14,5 %"
                  secondaryClassName="text-warning mr-2"
                  secondaryIcon={<i className="fa fa-arrow-up" />}
                  icon={<i className="ni ni-credit-card" />}
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
