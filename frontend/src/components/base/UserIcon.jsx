import user_icon from "../../assets/user_icon.webp";
import { UserIcon as StyledIcon } from "../styled_components";

export default function UserIcon({ size }) {
  return <StyledIcon src={user_icon} className={size}></StyledIcon>;
}
