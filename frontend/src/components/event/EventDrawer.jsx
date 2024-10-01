import { CloseOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import EventBody from "./EventBody";
import { useState } from "react";
import { useSelector } from "react-redux";
import { eventSelector } from "../../features/eventSlice";
import { StyledDrawer } from "../../styles/events";

export default function EventDrawer({ visible, onClose }) {
  const selectedItem = useSelector(eventSelector);

  return (
    <StyledDrawer
      title={selectedItem.title}
      placement={"left"}
      closable={false}
      onClose={onClose}
      open={visible}
      extra={
        <Button
          onClick={onClose}
          shape="square"
          icon={<CloseOutlined />}
        ></Button>
      }
    >
      <EventBody></EventBody>
    </StyledDrawer>
  );
}
