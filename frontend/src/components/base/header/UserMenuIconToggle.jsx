import React, { forwardRef } from "react";
import user_icon from "../../../assets/user_icon.webp";
import { Dropdown } from "antd";
import { UserIcon } from "../../styled_components";
import { useUserActions } from "../../../hooks/user.actions";
import { selectCurrentUser } from "../../../features/session/sessionSlice";
import { useSelector } from "react-redux";



export default function UserMenuIconToggle() {
  const userActions = useUserActions();
  const user = useSelector(selectCurrentUser);
  const items = [
    {
      key: "1",
      label: user.username,
      disabled:true
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: "Log out",
      onClick:() =>  userActions.logout()
    },
  ];


  return (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <UserIcon src={user_icon} className="sm"></UserIcon>
      </a>
    </Dropdown>
  );
}
