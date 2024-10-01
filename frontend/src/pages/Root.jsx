import { Outlet } from "react-router-dom";
import AppHeader from "../components/base/header/AppHeader";
import Footer from "../components/base/Footer";

export default function Root() {
  return (
    <>
      <AppHeader></AppHeader>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
