import { useSelector } from "react-redux";
import { BodyModal, EventInfoImg } from "../../styles/events";
import { eventSelector } from "../../features/eventSlice";
import { Col, Row, message } from "antd";
import { useEventActions } from "../../hooks/event.actions";
import { selectIsLoggedIn } from "../../features/session/sessionSlice";
import { useNavigate } from "react-router-dom";
import { ErrorButton, PrimaryButton } from "../styled_components";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function EventBody({onCancel}) {
  const selectedItem = useSelector(eventSelector);
  const loggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);
  const eventActions = useEventActions();

  const handleRegisterClick = () => {
    setIsSubmit(true);
    eventActions
      .registerToEvent(selectedItem)
      .then(() => {
        onCancel()
      })
      .catch((err) => message(err));
    setIsSubmit(false);
  };

  const handleCancelClick = () => {
    setIsSubmit(true);
    eventActions.cancelRegEvent(selectedItem).then((res) => {
      onCancel()
    });
    setIsSubmit(false);
  };

  return (
    <>
      <BodyModal>
        <Row>
          <Col>
            <EventInfoImg
              alt={`board game event ${selectedItem.title}`}
              src={`${process.env.REACT_APP_API_BASE_URL}/file/download/${selectedItem.file_name}`}
            ></EventInfoImg>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <p>{selectedItem.description}</p>
          </Col>
        </Row>
      </BodyModal>
      {loggedIn ? (
        selectedItem.tags.includes("reserved") ? (
          <ErrorButton
            icon={<CloseOutlined />}
            size="large"
            onClick={handleCancelClick}
            disabled={isSubmit}
          >
            {"Cancel reservation"}
          </ErrorButton>
        ) : (
          <PrimaryButton
            icon={<CheckOutlined />}
            size="large"
            onClick={handleRegisterClick}
            disabled={isSubmit}
          >
            {"Reserve place"}
          </PrimaryButton>
        )
      ) : (
        <PrimaryButton onClick={() => navigate("/login")}>
          Login to reserve
        </PrimaryButton>
      )}
    </>
  );
}
