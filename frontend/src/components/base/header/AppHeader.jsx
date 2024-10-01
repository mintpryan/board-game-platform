import { BaseHeader} from "../../../styles/header";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";



export default function AppHeader() {
  return (
    <BaseHeader>
      <MobileHeader></MobileHeader>
      <DesktopHeader></DesktopHeader>
    </BaseHeader>
  );
}
