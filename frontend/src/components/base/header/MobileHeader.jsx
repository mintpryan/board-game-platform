import React, { useState } from "react";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import { MenuDrawer, NavLinkContainer } from "../../../styles/header";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import AppLogo from "../AppLogo";
import a_logo from '../../../assets/Logo.png'
import { Mobile } from "../../../styles/main";
import { HEADER_MENU_ITEMS } from "../../constants";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const header_items = HEADER_MENU_ITEMS.map((item) => (
    <NavLink to={item.link} onClick={onClose}>
      {item.name}
    </NavLink>
  ));

  return (
    <Mobile>
      <Button
        onClick={showDrawer}
        type="text"
        icon={<MenuOutlined />}
        size="large"
      ></Button>

      <MenuDrawer
        title="Menu"
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={open}
        extra={
          <Button
            onClick={onClose}
            shape="square"
            icon={<CloseOutlined />}
            
          ></Button>
        }
      >
        <NavLinkContainer>{header_items}</NavLinkContainer>
      </MenuDrawer>
      <AppLogo size="md" image={a_logo} ></AppLogo>
    </Mobile>
  );
}
