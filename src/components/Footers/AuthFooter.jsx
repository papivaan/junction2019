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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

import AdminFooter from "./AdminFooter";

class Login extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container className="px-4">
          <Row className="align-items-center justify-content-xl-between">
            <Col md="6">
              <div className="copyright text-center text-md-left text-muted">
                © 2019{" "}
                <a
                  className="font-weight-bold ml-1"
                  href="https://www.xiple.io/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Team Xiple
                </a>
              </div>
            </Col>

            <Col md="6">
              <Nav className="nav-footer justify-content-center justify-content-md-end">
                <NavItem>
                  <NavLink
                    href="https://www.xiple.io/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    About Us
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Login;
