import React from "react";
import { Link } from "react-router-dom";
import RegistrationForm from "../components/authentication/RegistrationForm";
import gamePic from "../assets/Game-1.png";
import {
  Title,
  Text,
  Image,
  LogoText,
} from "../components/styled_components";
import { Content } from "antd/es/layout/layout";
import { Col, Row } from "antd";

function Registration() {
  return (
    <Content style={{ height: "100%" }}>
      <Row justify="center" style={{ height: "10%", alignItems: "center" }}>
        <LogoText>Sip&Play</LogoText>
      </Row>
      <Row justify="center" style={{ height: "80%", alignItems: "center" }}>
        <Col span={10} align="center" justify="center">
          <Row align="center" justify="center">
            <Title>Welcome!</Title>
          </Row>
          <Row justify="center">
            <Text>
              We're thrilled to have you join our vibrant community of board
              game enthusiasts. Whether you're a seasoned player or just
              starting out, our platform offers a space to discover new games,
              connect with fellow gamers, and dive into exciting adventures.
              <br />
              Or if you already have an account, please{" "}
              <Link to="/login/">login</Link>.
            </Text>
          </Row>
          <Image src={gamePic}></Image>
        </Col>

        <Col span={10} align="center" justify="center">
          <RegistrationForm />
        </Col>
      </Row>
    </Content>
  );
}

export default Registration;
