import {  Layout } from "antd";
import { TEXTS } from "../constants";


export default function Footer() {
  return (
    <>
      <Layout.Footer>
        <address>{TEXTS.address}</address>
        <a href={`tel:+${TEXTS.tel}`}>Tel: {TEXTS.tel}</a>
        <div id="email">{TEXTS.email}</div>
      </Layout.Footer>
    </>
  );
}
