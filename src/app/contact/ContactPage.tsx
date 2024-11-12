"use client";
import { FormEvent, useEffect, useState } from "react";
import GeneralBG from "../component/generalBG/GeneralBG";
import SocialList from "../component/socialList/SocialList";
import "./contact.scss";

import emailjs from "@emailjs/browser";
import { LuLoader2 } from "react-icons/lu";
import ContactHeading from "./ContactHeading";

emailjs.init({
  publicKey: process.env.NEXT_PUBLIC_EMAILJS,
  limitRate: {
    // Set the limit rate for the application
    id: "app",
    // Allow 1 request per 10s
    throttle: 10000,
  },
});
export default function ContactPage({ children }: any) {
  let [loading, setLoading] = useState(false);

  const submit = async (e: FormEvent) => {
    setLoading(true), e.preventDefault();
    let data = await emailjs.sendForm(
      "vfleetproject@gmail.com",
      "template_705268e",
      (e.target as HTMLButtonElement).form ?? "#contact-section"
    );

    console.log(data);
    setLoading(false);
  };
  return (
    <main id="page_contact">
      <div className={`loading ${loading ? "loaded" : "hidden"}`}>
        {loading ? <LuLoader2 /> : <></>}
        <p> {loading ? "Loading . . ." : "Form Submitted!"}</p>
      </div>
      <GeneralBG />
      <section id="top-section">
        <a href=""></a>
        {children}
        <SocialList />
      </section>

      <form action="#" id="contact-section" onSubmit={submit}>
        <div className="panel">
          <div className="confine">
            <div className="form-group">
              <div className="fi">
                <label htmlFor="from_name">Name</label>
                <input type="text" name="from_name" placeholder="Your Name" />
              </div>
              <div className="fi">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@gmail.com"
                />
              </div>
            </div>

            <div className="fi">
              <label htmlFor="message">MESSAGES:</label>

              <textarea
                name="message"
                id="message"
                placeholder="Write your message here!"
              ></textarea>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-special">
          SUBMIT
        </button>
      </form>
    </main>
  );
}
