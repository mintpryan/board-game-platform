import styled from "styled-components";

import { Button } from "antd";
import {Form} from "antd"
import { NavLink } from "react-router-dom";

const primary_color = "#2C5784";
const error_color = "#BA1200"
const error_color_hover = "#CC1A06"
const light_color = "#d2daff";
const text_color = "#313d5a";
const primary_color_darken = "#596fd4";

export const AbstractButton = styled(Button)`
  color: white;
  &:hover,
  &:active,
  &:focus-visible {
    color: white !important;
    background-color: ${primary_color_darken}!important;
    border-color: ${primary_color_darken}!important;
  }

  &:disabled {
    color: white;
    background-color: ${primary_color};
    border-color: ${primary_color};
    filter: brightness(80%);
  }

  && {
    @media only screen and (max-width: 450px) {
      justify-self: center;
      max-width: 30vw;
      height: 7vh;
      font-size: 1em;
    }

    @media only screen and (min-width: 450px) {
      justify-self: start;
      min-width: 10vw;
      margin-right: 1em;
    }
  }
`;

export const PrimaryButton = styled(AbstractButton)`
  background-color: ${primary_color};
  border-color: ${primary_color};
  color: white;
`;


export const ErrorButton = styled(AbstractButton)`
  background-color: ${error_color};
  border-color: ${error_color};
  color: white;
  &:hover,
  &:active,
  &:focus-visible {
    color: white !important;
    background-color: ${error_color_hover}!important;
    border-color: ${error_color_hover}!important;
  }

  &:disabled {
    color: white;
    background-color: ${error_color};
    border-color: ${error_color};
    filter: brightness(80%);
  }
`;

export const HeaderMenuButton = styled(NavLink)`
  background-color: ${light_color};
  border-color: ${light_color};
  color: ${text_color};
  font-size: 1.2em;
  padding-right: 1em;
  &:active {
    font-weight: bold;
    transform: scale(0.95);
  }
`;

export const SimpleHref = styled.a`
  color: ${primary_color};
`;

export const MenuHref = styled.a`
  color: ${text_color};
`;

export const CustomForm = styled(Form)`
  && {
    display: grid;
    justify:center;
  }
`;

export const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: #80cfa9;
  font-family: "Nunito";

  @media only screen and (max-width: 450px) {
    display: none;
  }

  @media only screen and (min-width: 450px) {
    font-size: 1.5em;
  }

  @media only screen and (min-width: 860px) {
    font-size: 2em;
  }
`;

export const Text = styled.p`
  font-size: 1em;
  text-align: center;
  color: #313d5a;
  font-family: "Nunito";
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  @media only screen and (max-width: 575.98px) {
    max-width: 5vw;
  }

  @media only screen and (min-width: 576px) and (max-width: 767.98px) {
    max-width: 10vw;
  }

  @media only screen and (min-width: 768px) and (max-width: 991.98px) {
    max-width: 25vw;
  }

  @media only screen and (min-width: 992px) and (orientation: portrait) {
    max-width: 40vw;
  }

  @media only screen and (min-width: 992px) and (orientation: landscape) {
    max-width: 20vw;
  }
`;

export const Icon = styled.img`
  @media only screen and (max-width: 450px) and (orientation: portrait) {
    &.md {
      max-width: 20vw;
    }
    &.sm {
      max-width: 10vw;
    }
  }

  @media only screen and (min-width: 450px) and (orientation: portrait) {
    &.md {
      max-width: 10vw;
    }
    &.sm {
      max-width: 6vw;
    }
  }

  @media only screen and (max-width: 450px) and (orientation: landscape) {
    &.md {
      max-width: 20vh;
    }
    &.sm {
      max-width: 10vh;
    }
  }

  @media only screen and (min-width: 450px) and (orientation: landscape) {
    &.md {
      max-width: 10vh;
    }
    &.sm {
      max-width: 6vh;
    }
  }
`;

export const UserIcon = styled(Icon)`
  border-radius: 50%;
  object-fit: cover;
  &:active {
    font-weight: bold;
    transform: scale(0.95);
  }
`;

export const LogoText = styled.h1`
  text-align: center;
  color: #313d5a;
  font-family: "Nunito";
  @media only screen and (max-width: 450px) {
    display: none;
  }

  @media only screen and (min-width: 450px) {
    font-size: 1.5em;
  }

  @media only screen and (min-width: 860px) {
    font-size: 2em;
  }
`;

export const LogoTextSM = styled(LogoText)`
  @media only screen and (max-width: 720px) {
    display: none;
  }

  @media only screen and (min-width: 720px) {
    font-size: 1em;
  }

  @media only screen and (min-width: 860px) {
    font-size: 1.5em;
  }
`;

export const StyledRegistrationForm = styled.div`
  color: #313d5a;
  && {
    @media only screen and (min-width: 1020px) {
      min-width: 40vw;
    }

    @media only screen and (min-width: 760px) and (max-width: 1020px) {
      min-width: 30vw;
    }

    @media only screen and (max-width: 760px) {
      min-width: 20vw;
    }
  }
`;

export const FilledContainer = styled.div`
  border: solid;
  border-color: #e1e6ff;
  border-radius: 1em;
  background-color: #e9edff;
`;

export const BorderContainer = styled.div`
  border: solid;
  border-color: #e1e6ff;
  border-radius: 1em;
  color: ${text_color};
`;

export const StyledNavbar = styled.div`
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${light_color};
`;

export const NavLinkGroup = styled.div`
  display: flex;
  min-width: 80vw;
  align-items: center;
`;

export const Footer = styled.footer`
  background-color: #9facca;
  color: ${text_color};
`;
export const RootContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainContainer = styled.div`
  height: 100%;
`;

export const PageContainer = styled.div`
  height: 100%;
  margin-top: 1em;
  margin-bottom: 1em;
`;

export const Canvas = styled.div`
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );

  display: flex;
  width: 30%; /* 30% of the container width */

  justify-content: center;
  align-items: center;
`;
