import React from "react";
import ContactPage from "./ContactPage";
import ContactHeading from "./ContactHeading";

type Props = {};

export default function page({}: Props) {
  return (
    <ContactPage>
      <ContactHeading />
    </ContactPage>
  );
}
