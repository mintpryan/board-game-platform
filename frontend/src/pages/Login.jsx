import React from "react";
import LoginForm from "../components/authentication/LoginForm";
import familyPicA from "../assets/Family-3.png";
import familyPicB from "../assets/Family-4.png";
import { Text, Image, LogoText } from "../components/styled_components";
import AppLogo from "../components/base/AppLogo";
import { Col, Flex } from "antd";
import { Content } from "antd/es/layout/layout";

function Login() {
  return (
    <Content style={{height:'100%',display:'grid'}}>
      <Flex justify="center" align="center">
        <AppLogo size="md"></AppLogo>

        <LogoText>Sip&Play</LogoText>
      </Flex>
      <Flex justify="center" align="center">
       
          <LoginForm />

      </Flex>

      <Flex justify="space-between" align="flex-end">
        
          <Image src={familyPicA}></Image>
       
          <Image src={familyPicB}></Image>
        
      </Flex>
    </Content>
  );
}

export default Login;
