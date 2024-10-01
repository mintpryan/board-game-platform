import styled from "styled-components";

const color_light = "#DEE9D3";
const color_dark = "#0D1F2D";

const color_acent = "#8F2D56";
const color_bright = "#08B2E3";
const color_neutral = "#F4F4F9";

export const tokens = {
  headerBg: "white",
  bodyBg: color_neutral,
  colorBgElevated: "#FFFCF9",
  colorPrimary: "#7FB285",
  colorSuccess: "#59A96A",
  colorError:"#C05746",
  colorLink: "#8F2D56",
  colorPrimaryHover: "#78B193",
  colorLinkHover: "#4A44B9",
  colorLinkActive: "#4A44B9",
  colorBgContainer: "white",

  socialIconSize: "3em",
};

export const Main = styled.main`
  padding: 1em;
`;

export const ResponsiveMobile = styled.aside`
  @media only screen and (min-width: 767.98px) {
    display: none;
  }
`;

export const ResponsiveDesktop = styled.aside`
  @media only screen and (max-width: 767.98px) {
    display: none;
  }
`;

export const ResponsiveMobileAnalog = styled.aside`
  @media only screen and (min-width: 1023.98px) {
    display: none;
  }
`;

export const ResponsiveDesktopAnalog = styled.aside`
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Mobile = styled(ResponsiveMobile)`
  width: 100%;
  align-items: center;
  @media only screen and (max-width: 767.98px) {
    display: flex;
  }
`;

export const Desktop = styled(ResponsiveDesktop)`
  width: 100%;
  align-items: center;
  @media only screen and (min-width: 767.98px) {
    display: flex;
  }
`;

export const HorizontalImage = styled.img`
  @media only screen and (max-width: 450px) {
    max-height:2vh;
  }
  @media only screen and (max-width: 767.98px) {
   max-height:4vh;
  }
 
   max-height:6vh;
  
`;
