import MenuItem from "antd/es/menu/MenuItem";
import { DesktopBaseMenu, LinkContainer } from "../../../styles/header";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Desktop, tokens } from "../../../styles/main";
import { HEADER_MENU_ITEMS } from "../../constants";

import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../features/session/sessionSlice";
import UserMenuIconToggle from "./UserMenuIconToggle";


export default function DesktopHeader() {
  const navigate = useNavigate();
  const loggedIn = useSelector(selectIsLoggedIn);

  const header_items = HEADER_MENU_ITEMS.map((item, index) => (
    <MenuItem key={index}>
      <NavLink to={item.link}>{item.name}</NavLink>
    </MenuItem>
  ));
  return (
    <Desktop>
      <DesktopBaseMenu mode="horizontal">{header_items}</DesktopBaseMenu>
      {!loggedIn ? (
        <LinkContainer>
          <Link style={{ color: tokens.colorPrimary }} to="/register">
            Sign up
          </Link>
          <Link style={{ color: tokens.colorLink }} to="/login">
            Sign in
          </Link>
        </LinkContainer>
      ) : (
        <UserMenuIconToggle></UserMenuIconToggle>
      )}
    </Desktop>
  );
}
