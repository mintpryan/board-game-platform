import {
  StyledEventModal,
  HeaderModal,
} from "../../styles/events";
import { useSelector } from "react-redux";
import { eventSelector } from "../../features/eventSlice";
import EventBody from "./EventBody";

export default function EventModal({ visible, onClose }) {
  const selectedItem = useSelector(eventSelector);

  return (
    <StyledEventModal
      title={<HeaderModal>{selectedItem.title}</HeaderModal>}
      centered
      open={visible}
      onCancel={onClose}
      width="60vw"
      footer={(_) => (
        <EventBody onCancel={onClose}></EventBody>
      )}
    >
      
    </StyledEventModal>
  );
}
