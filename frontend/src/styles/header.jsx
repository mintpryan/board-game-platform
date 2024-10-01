import { Drawer, Layout, Menu } from "antd";
import { tokens } from "./main";
import styled from "styled-components";
import { Header } from "antd/es/layout/layout";

export const BaseHeader = styled(Header)`
  display: flex;
  padding: 0.5em;

  background-color: white;
  border-bottom: 0.1em solid rgba(5, 52, 99, 0.06);

  @media only screen and (max-width: 767.98px) {
    min-height: 9vh;
  }

  @media only screen and (min-width: 768px) and (max-width: 991.98px) {
    min-height: 10vh;
  }
  @media only screen and (min-width: 992px) {
    min-height: 10vh;
  }
`;
export const DesktopBaseMenu = styled(Menu)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: start;
  font-weight: 700;
  font-family: "Nunito";
  border-bottom: unset;

  @media only screen and (max-width: 767.98px) {
    display: none;
  }
  @media only screen and (min-width: 768px) and (max-width: 991.98px) {
    font-size: 1em;
  }
  @media only screen and (min-width: 992px) {
    font-size: 1.4em;
  }
`;

export const MenuDrawer = styled(Drawer)`
  background-color: ${tokens.bodyBg};
  max-width: 70%;
  font-family: "Nunito";
  font-size: 1.5em;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2em;
`;

export const NamedLogo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const LinkContainer = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: space-evenly;
  font-weight: 700;
  font-family: "Nunito";
  flex-direction: row;

  @media only screen and (max-width: 767.98px) {
    display: none;
  }
  @media only screen and (min-width: 768px) and (max-width: 991.98px) {
    font-size: 1em;
  }
  @media only screen and (min-width: 992px) {
    font-size: 1.4em;
  }
`;


export const LinkText = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: end;
  font-weight: 700;
  font-family: "Nunito";
  flex-direction: row;

  @media only screen and (max-width: 767.98px) {
    display: none;
  }
  @media only screen and (min-width: 768px) and (max-width: 991.98px) {
    font-size: 1em;
  }
  @media only screen and (min-width: 992px) {
    font-size: 1.4em;
  }
`;