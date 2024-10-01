import { Card } from "antd";
import { Content } from "antd/es/layout/layout";
import styled from "styled-components";

export const HeroContainer = styled.div`
  background-color: white;
  position: relative;
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  overflow: hidden;
  z-index: 1;
  @media only screen and (max-width: 1023.98px) {
    display: none;
  }
  @media only screen and (orientation: portrait) {
    display: none;
  }
`;

export const SmallHeroContainer = styled(HeroContainer)`
  width: 100vw;
  height: 20vh;
`;

export const VideoBackground = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1;
  @media only screen and (max-width: 767.98px) {
    display: none;
  }
`;

export const HeroTitle = styled.h1`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  font-size: 2em;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  z-index: 3;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);


  &:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1); 
  z-index: -1; 
  border-radius: 15px; 
}
`;

export const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin: 20px 0;
`;

export const CarouselContainer = styled(Content)`
  font-family: "Nunito";
  position: relative;
  height: 80vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  overflow: hidden;
`;

export const Icon = styled.img`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 450px) and (orientation: portrait) {
    &.md {
      max-height: 5vh;
    }
    &.sm {
      max-height: 2vh;
    }
  }

  @media only screen and (min-width: 450px) and (orientation: portrait) {
    &.md {
      max-height: 5vh;
    }
    &.sm {
      max-height: 3vh;
    }
  }

  @media only screen and (max-width: 450px) and (orientation: landscape) {
    &.md {
      max-height: 5vh;
    }
    &.sm {
      max-height: 5vh;
    }
  }

  @media only screen and (min-width: 450px) and (orientation: landscape) {
    &.md {
      max-height: 10vh;
    }
    &.sm {
      max-height: 6vh;
    }
  }
`;

export const BaseTitle = styled.h1`
  font-size: 2rem;
  margin: 1em;
  @media only screen and (max-width: 767.98px) {
    font-size: 1.2rem;
  }
`;

export const BaseText = styled.p`
  font-size: 1rem;
  margin: 1em;
  font-family: "Nunito";
`;


export const Section = styled.section``;
