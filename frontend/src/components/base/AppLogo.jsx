
import { Icon } from "../../styles/styles";
import { Link } from "react-router-dom";

export default function AppLogo({ size ,image}) {
  return (
    <Link to="/" rel="noopener noreferrer">
      <Icon src={image} className={size}></Icon>
    </Link>
  );
}
