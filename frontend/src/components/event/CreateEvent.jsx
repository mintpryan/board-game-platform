import { Button, Drawer, Form } from "antd";
import React, { useState } from "react";
import EventForm from "./EventForm";
import { PrimaryButton } from "../styled_components";

export default function CreateEvent() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <PrimaryButton onClick={showDrawer}>Create event</PrimaryButton>
      <Drawer title="Create event" onClose={onClose} open={open} size="large">
        <EventForm onClose={onClose}></EventForm>
      </Drawer>
    </>
  );
}
