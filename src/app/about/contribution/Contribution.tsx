"use client";
import { useInView } from "framer-motion";
import * as motion from "framer-motion/client";
import Link from "next/link";
import { useRef } from "react";

export default function Contribution() {
  const root = useRef(null);
  const isInView = useInView(root, {
    amount: 0.5,
  });
  return (
    <section id="contribution" ref={root}>
      <div className="plane-art">
        <motion.img
          animate={
            isInView
              ? {
                  transform: "translateY(0%)",
                }
              : {
                  transform: "translateY(-110%)",
                }
          }
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          src="/de/plane-art-down.png"
        />
      </div>
      <article className="confine">
        <div className="line"></div>
        <img src="/gfx/icon_black.png" alt="" className="icon" />
        <h2 className="common-sh">CONTRIBUTION</h2>
        <div className="head">
          <motion.img
            animate={
              isInView
                ? {
                    x: 0,
                    opacity: 1,
                  }
                : {
                    x: -500,
                    opacity: 0,
                  }
            }
            transition={{
              duration: 0.5,
              type: "spring",
              delay: 0.5,
            }}
            src="/de/title-side.svg"
            alt=""
            className="side l"
          />
          <h2 className="common-h">DONATIONS & SUPPORT</h2>
          <motion.img
            animate={
              isInView
                ? {
                    x: 0,
                    opacity: 1,
                  }
                : {
                    x: -500,
                    opacity: 0,
                  }
            }
            transition={{
              duration: 0.5,
              type: "spring",
              delay: 0.5,
            }}
            src="/de/title-side.svg"
            alt=""
            className="side r"
          />
        </div>
        <p className="common-p">
          We encourage you to support our talents on their streaming journeys,
          however, VFleet asks you to consider donating to the nonprofit naval
          and aerospace museums that inspired this project. If there is a museum
          ship near you, we encourage not only a donation, but a visit as well!
          Your support matters!
        </p>
      </article>
      <Link href={"/donate"} className="btn btn-special">
        DONATE
      </Link>
    </section>
  );
}
