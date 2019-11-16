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
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

import Icon from "../../components/Icon";

const LoginButton = ({ icon, text, link }) => (
  <Button
    className="btn-neutral btn-icon"
    style={{ display: "block" }}
    color="default"
    href={link}
    onClick={e => e.preventDefault()}
  >
    <span className="btn-inner--icon">
      <Icon iconName={icon} />
    </span>
    <span className="btn-inner--text">{text}</span>
  </Button>
);

const loginRoles = [
  {
    icon: "active-40",
    text: "GitHub",
    link: "/"
  },
  {
    icon: "caps-small",
    text: "Google",
    link: "/"
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
              {loginRoles.map(login => (
                <Col sm="12" className="my-2">
                  <LoginButton {...login} />
                </Col>
              ))}
            </Row>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <small>Create new account</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
