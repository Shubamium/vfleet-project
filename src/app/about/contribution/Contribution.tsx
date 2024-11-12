"use client";
import { useInView } from "framer-motion";
import * as motion from "framer-motion/client";
import Link from "next/link";
import { useRef } from "react";

export default function Contribution({ sh, h, p }: any) {
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
        <h2 className="common-sh">{sh}</h2>
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
          <h2 className="common-h">{h}</h2>
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
        <p className="common-p">{p}</p>
      </article>
      <Link href={"/donate"} className="btn btn-special">
        DONATE
      </Link>
    </section>
  );
}
