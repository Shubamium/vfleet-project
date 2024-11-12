"use server";
import React from "react";
import GeneralHeading from "../component/generalHeading/GeneralHeading";
import { fetchData } from "@/db/client";

type Props = {};

export default async function ContactHeading({}: Props) {
  const generalData = await fetchData<any>(`
		*[_type == 'general' && preset == 'main']{
			contact_text
		}[0]
	`);
  const t = generalData.contact_text;
  return <GeneralHeading sub="REACH OUT" h="CONTACT US" d={t.c1} />;
}
