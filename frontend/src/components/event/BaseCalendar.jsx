import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import rrulePlugin from "@fullcalendar/rrule";
import { useDispatch, useSelector } from "react-redux";
import {
  eventSelector,
  eventsSelector,
  selectItem,
} from "../../features/eventSlice";
import { useEventActions } from "../../hooks/event.actions";
import { useEffect, useState } from "react";
import { CalendarEvent } from "../../styles/events";
import EventModal from "./EventModal";
import EventDrawer from "./EventDrawer";
import { selectIsLoggedIn } from "../../features/session/sessionSlice";
import { Col, Row, Tag } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

const BaseCalendar = ({ isMobile }) => {
  const loggedIn = useSelector(selectIsLoggedIn);
  const eventActions = useEventActions();
  const dispatch = useDispatch();
  const selectedItem = useSelector(eventSelector);

  const events = useSelector(eventsSelector);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    eventActions.getAllEvents();
  }, [modalVisible]);

  const handleEventClick = (clickInfo) => {
    dispatch(selectItem(clickInfo.event.extendedProps.public_id));
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  return (
    <CalendarEvent>
      <FullCalendar
        timeZone="local"
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          rrulePlugin,
          listPlugin,
        ]}
        initialView="listWeek"
        events={events}
        eventContent={(eventInfo) => {
          return (
            <Row>
              <Col span={22}>
                {eventInfo.timeText} {eventInfo.event.title}
              </Col>
              <Col className="event-tags">
                {eventInfo.event.extendedProps.tags.map((tag) => (
                  <Tag icon={<CheckCircleOutlined />} color="success" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </Col>
            </Row>
          );
        }}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        height="auto"
        eventClick={handleEventClick}
      />
      {selectedItem && !isMobile ? (
        <EventModal visible={modalVisible} onClose={handleCloseModal} />
      ) : (
        ""
      )}
      {selectedItem && isMobile ? (
        <EventDrawer visible={modalVisible} onClose={handleCloseModal} />
      ) : (
        ""
      )}
    </CalendarEvent>
  );
};

export default BaseCalendar;
