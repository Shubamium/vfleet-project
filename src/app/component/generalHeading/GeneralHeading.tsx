"use client";
import * as motion from "framer-motion/client";
import "./generalHeading.scss";
import { useInView } from "framer-motion";
import { useRef } from "react";
type Props = {
  sub?: string;
  h?: string;
  d?: string;
};

export default function GeneralHeading({ sub, h, d }: Props) {
  const root = useRef(null);
  const isInView = useInView(root, {
    margin: "200px",
  });
  return (
    <div className="general-heading" ref={root}>
      <div className="vertical-line"></div>
      <img src="/gfx/icon_black.png" alt="" className="icon" />
      <p className="common-sh">{sub ?? "SUB HEADING"}</p>
      <div className="head">
        <motion.img
          initial={{
            x: 100,
            opacity: 0,
            rotate: -90,
          }}
          animate={
            !isInView
              ? {
                  x: 100,
                  opacity: 0,
                  rotate: -90,
                }
              : {
                  x: 0,
                  opacity: 1,
                  rotate: 0,
                }
          }
          src="/de/title-side.svg"
          alt=""
          transition={{
            duration: 1.2,
            type: "spring",
          }}
          className="side l"
        />
        <h2 className="common-h">{h ?? "MAIN HEADING"}</h2>
        <motion.img
          initial={{
            x: 100,
            opacity: 0,
            rotate: -90,
          }}
          animate={
            isInView
              ? {
                  x: 0,
                  opacity: 1,
                  rotate: 0,
                }
              : {
                  x: 100,
                  opacity: 0,
                  rotate: -90,
                }
          }
          src="/de/title-side.svg"
          alt=""
          transition={{
            duration: 1.2,
            type: "spring",
          }}
          className="side r"
        />
      </div>
      <p className="common-p">
        {d ??
          `VFleet is a Vtuber Company that prioritizes the needs of talents as well
        as works towards spreading awareness, engagement, and connection with
        Naval Museums around the world.`}
      </p>
    </div>
  );
}
