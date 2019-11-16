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
import { useHistory } from "react-router-dom";

// reactstrap components
import { Button, Card, CardBody, Row, Col } from "reactstrap";

import Icon from "../components/Icon";

const LoginButton = ({ icon, text, link }) => {
  const history = useHistory();

  return (
    <Button
      className="btn-neutral btn-icon"
      style={{ display: "block" }}
      color="default"
      href={link}
      onClick={e => {
        e.preventDefault();
        history.push(link);
      }}
    >
      <span className="btn-inner--icon">
        <Icon iconName={icon} />
      </span>
      <span className="btn-inner--text">{text}</span>
    </Button>
  );
};

const loginRoles = [
  {
    icon: "circle-08",
    text: "Civil",
    link: "/civil"
  },
  {
    icon: "settings",
    text: "Worker",
    link: "/worker"
  },
  {
    icon: "single-02",
    text: "Site manager",
    link: "/site-manager"
  },
  {
    icon: "hat-3",
    text: "Work manager",
    link: "/work-manager"
  },
  {
    icon: "istanbul",
    text: "Contractor",
    link: "/"
  },
  {
    icon: "shop",
    text: "Customer",
    link: "/"
  },
  {
    icon: "satisfied",
    text: "Examples",
    link: "/examples"
  }
];

const Login = () => {
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <h2 className="text-muted">Login as...</h2>
            <Row>
              {loginRoles.map((login, idx) => (
                <Col key={idx} sm="12" className="my-2">
                  <LoginButton {...login} />
                </Col>
              ))}
            </Row>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Login;
