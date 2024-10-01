import {  Card, Drawer, Modal } from "antd";
import styled from "styled-components";
import { tokens } from "./main";

export const StyledEventFlipCard = styled(Card)`
  font-weight: 600;
  font-family: "Nunito";
  min-width: 35vw;

  &.mobile {
    min-height: 50vh;
  }
  &.desktop {
    min-height: 30vh;
  }
  margin: 1em;
  border: 4px solid;
  border-image-slice: 1;
  border-width: 2px;
  border-color: transparent;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
`;

export const StyledFlipCardFront = styled(StyledEventFlipCard)`
  .ant-card-body {
    padding: unset;
  }
`;

export const StyledFlipCardBack = styled(StyledEventFlipCard)`
  .ant-card-body {
    font-size: 1.2em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
  &.mobile {
    height: 100%;
  }
  &.desktop {
    height: 45%;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Arrow = styled.div`
  z-index: 1;
  display: block;
  background: ${tokens.colorPrimary}; /* Цвет фона стрелок */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: ${tokens.colorPrimary};
  }
`;

export const CalendarEvent = styled.div`
  font-weight: 600;
  font-family: "Nunito";
  .fc-event {
    cursor: pointer;
  }

  .fc-prev-button,
  .fc-next-button,
  .fc-button,
  .fc-button-primary:disabled {

    background-color: ${tokens.colorPrimary};
    border-color: ${tokens.colorPrimary};
    color: white;
  }

  .fc-prev-button:hover,
  .fc-next-button:hover,
  .fc-button:hover {
    background-color: ${tokens.colorPrimaryHover};
    border-color: ${tokens.colorPrimary};
    color: white;
  }

  .fc-toolbar-title {
    font-size: 1em;
  }
`;

export const EventInfoImg = styled.img`
  width: 80%;
`;

export const EventFlipCardImg = styled.img`
  width: 100%;
  filter: blur(2px) brightness(0.7);
  border: 4px solid;
  border-image-slice: 1;
  border-width: 2px;
  border-color: transparent;
  border-radius: 10px;
`;

export const CenteredText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
`;

export const StyledEventModal = styled(Modal)`
  font-weight: 600;
  font-family: "Nunito";
`;

export const HeaderModal = styled.span`
  font-size: 2rem;
  font-weight: bold;
  @media only screen and (max-width: 767.98px) {
    font-size: 1rem;
  }
`;

export const BodyModal = styled.span`
  display: grid;
  font-size: 1em;
  font-weight: bold;
  @media only screen and (max-width: 767.98px) {
    font-size: 0.8rem;
  }
  text-align: center;
`;

export const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    display: grid;
    justify-content: center;
    align-items: center;
  }
`;


