import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BaseCalendar from "../components/event/BaseCalendar";
import { Main, ResponsiveDesktop, ResponsiveMobile } from "../styles/main";
import { useEffect, useState } from "react";
import CreateEvent from "../components/event/CreateEvent";
import { useEventActions } from "../hooks/event.actions";
import { useSelector } from "react-redux";
import {
  selectIsSuperUser,
} from "../features/session/sessionSlice";

export default function Events() {
  const isSuperUser = useSelector(selectIsSuperUser);
  const eventAction = useEventActions();

  useEffect(() => {
    eventAction.getAllEvents();
  }, []);

  return (
    <Main>
      <ResponsiveMobile>
        <BaseCalendar isMobile={true}></BaseCalendar>
      </ResponsiveMobile>
      <ResponsiveDesktop>
        {isSuperUser ? <CreateEvent></CreateEvent> : ""}
        <BaseCalendar isMobile={false}></BaseCalendar>
      </ResponsiveDesktop>
    </Main>
  );
}
