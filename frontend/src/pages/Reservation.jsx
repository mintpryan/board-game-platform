import React from "react";
import { Link } from "react-router-dom";

import RegistrationForm from "../components/authentication/RegistrationForm";
import familyPic from "../assets/Family-1.png";
import {
  Title,
  Text,
  Image,
  StyledRegistrationForm,
  LogoText,
} from "../components/styled_components";
import AppLogo from "../components/base/AppLogo";

function Reservation() {
  return (
    <div fluid className="full-height">
      <div className="d-flex flex-column align-items-center justify-content-center mb-2">
        <AppLogo size="md"></AppLogo>
        <LogoText>FamilyHub</LogoText>
      </div>
      <div className="d-flex row align-items-start justify-content-around">
        <div className="d-none d-md-flex col-md-5">
          <div className="content text-center">
            <Title>Welcome!</Title>
            <Text>
              Join us, stay connected and coordinated with Family Hub, the
              ultimate tool for managing tasks and schedules within your family.{" "}
              <br />
              Or if you already have an account, please{" "}
              <Link to="/login/">login</Link>.
            </Text>
            <Image src={familyPic}></Image>
          </div>
        </div>
        <div className="d-none d-md-flex col-md-5 justify-content-center">
          <StyledRegistrationForm>
            <RegistrationForm></RegistrationForm>
          </StyledRegistrationForm>
        </div>
        <div className="d-md-none justify-content-center">
          <StyledRegistrationForm>
            <Text>Registration Form</Text>
            <RegistrationForm></RegistrationForm>
          </StyledRegistrationForm>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
