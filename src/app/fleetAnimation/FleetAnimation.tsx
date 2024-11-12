"use client";
import React, { useRef } from "react";
import * as motion from "framer-motion/client";
import { useInView } from "framer-motion";

type Props = {};

export default function FleetAnimation({}: Props) {
  let root = useRef(null);
  let planeVariant = {
    whileInView: {
      y: 20,
    },
    initial: {
      y: 400,
    },
  };

  const isInView = useInView(root, {
    amount: 0.8,
  });
  const planeProp = {
    initial: "initial",
    animate: isInView ? planeVariant.whileInView : planeVariant.initial,
    variants: planeVariant,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
    viewport: {
      root: root,
      margin: "-200px",
    },
  };

  return (
    <section id="fleet-animation" ref={root}>
      <motion.img
        initial={{
          x: -300,
          opacity: 0,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                x: 50,
              }
            : {
                x: -300,
                opacity: 0,
              }
        }
        transition={{
          ease: "easeOut",
          duration: 0.9,
        }}
        src="/de/ship-gold.png"
        alt=""
        className="ship la"
      />
      <motion.img
        initial={{
          x: -400,
          opacity: 0,
        }}
        animate={
          isInView
            ? {
                x: 0,
                opacity: 1,
              }
            : {
                x: -400,
                opacity: 0,
              }
        }
        transition={{
          ease: "easeOut",
          duration: 0.9,
          delay: 0.2,
        }}
        src="/de/ship-blue.png"
        alt=""
        className="ship lb"
      />
      <motion.img
        initial={{
          x: -400,
          opacity: 0,
        }}
        animate={
          isInView
            ? {
                x: 80,
                opacity: 1,
              }
            : {
                x: -400,
                opacity: 0,
              }
        }
        transition={{
          ease: "easeOut",
          duration: 0.9,
          delay: 0.2,
        }}
        src="/de/ship-blue.png"
        alt=""
        className="ship rb"
      />
      <motion.img
        initial={{
          x: -100,
          opacity: 0,
        }}
        whileInView={
          isInView
            ? {
                opacity: 1,
                x: 100,
              }
            : {
                x: -100,
                opacity: 0,
              }
        }
        transition={{
          ease: "easeOut",
          duration: 1.1,
        }}
        src="/de/ship-gold.png"
        alt=""
        className="ship ra"
      />

      <svg
        width="550"
        height="456"
        viewBox="0 0 550 456"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="plane"
      >
        <g id="center_plane">
          <motion.g
            {...planeProp}
            transition={{ ...planeProp.transition, delay: 0.3 }}
            id="l"
          >
            <g id="Group 48">
              <mask
                id="mask0_76_94"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="286"
                y="41"
                width="264"
                height="198"
              >
                <g id="Jet-Fighter-Graphics-4186018-1-1-580x435 2">
                  <rect
                    x="286"
                    y="41"
                    width="264"
                    height="198"
                    fill="url(#pattern0_76_94)"
                  />
                  <rect
                    x="286"
                    y="41"
                    width="264"
                    height="198"
                    fill="url(#pattern1_76_94)"
                  />
                </g>
              </mask>
              <g mask="url(#mask0_76_94)">
                <rect
                  id="Jet-Fighter-Graphics-4186018-1-1-580x435 1"
                  x="296.371"
                  y="41"
                  width="264"
                  height="198"
                  fill="#023DAF"
                />
              </g>
            </g>
            <path
              id="Vector 11"
              d="M414.519 199.917C414.562 200.641 414.605 201.37 414.649 202.105C430.798 473.211 441.5 400.5 519 433.357L398.901 433.357C418.674 427.465 417.678 290.623 414.519 199.917C411.648 117.468 406.99 73.1368 414.519 199.917Z"
              fill="#023DAF"
            />
          </motion.g>
          <motion.g
            {...planeProp}
            transition={{ ...planeProp.transition, delay: 0.2 }}
            id="r"
          >
            <g id="Group 47">
              <mask
                id="mask1_76_94"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="53"
                width="248"
                height="186"
              >
                <g id="Jet-Fighter-Graphics-4186018-1-1-580x435 2_2">
                  <rect
                    y="53"
                    width="248"
                    height="186"
                    fill="url(#pattern2_76_94)"
                  />
                  <rect
                    y="53"
                    width="248"
                    height="186"
                    fill="url(#pattern3_76_94)"
                  />
                </g>
              </mask>
              <g mask="url(#mask1_76_94)">
                <rect
                  id="Jet-Fighter-Graphics-4186018-1-1-580x435 1_2"
                  x="54"
                  y="53"
                  width="140"
                  height="186"
                  fill="#023DAF"
                />
              </g>
            </g>
            <path
              id="Vector 12"
              d="M124.588 204.644C124.518 205.381 124.448 206.125 124.377 206.874C98.1826 483.027 53.1978 408.593 29 442.628L125.839 442.366C110.182 436.409 117.634 297.034 124.588 204.644C130.909 120.664 136.819 75.504 124.588 204.644Z"
              fill="#023DAF"
            />
          </motion.g>
          <motion.g
            {...planeProp}
            transition={{ ...planeProp.transition, delay: 0 }}
            id="center"
          >
            <g id="Group 48_2">
              <mask
                id="mask2_76_94"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="124"
                y="0"
                width="280"
                height="210"
              >
                <g id="Jet-Fighter-Graphics-4186018-1-1-580x435 2_3">
                  <rect
                    x="124"
                    width="280"
                    height="210"
                    fill="url(#pattern4_76_94)"
                  />
                  <rect
                    x="124"
                    width="280"
                    height="210"
                    fill="url(#pattern5_76_94)"
                  />
                </g>
              </mask>
              <g mask="url(#mask2_76_94)">
                <rect
                  id="Jet-Fighter-Graphics-4186018-1-1-580x435 1_3"
                  x="66"
                  width="280"
                  height="210"
                  fill="#FEC200"
                />
              </g>
            </g>
            <path
              id="Vector 8"
              d="M188 446.021C263.792 402.021 260.479 139.899 263.792 162.362C267.105 184.825 263.792 403.521 321.5 446.021H188Z"
              fill="#FEC200"
            />
          </motion.g>
        </g>
        <defs>
          <pattern
            id="pattern0_76_94"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_76_94"
              transform="scale(0.00172414 0.00229885)"
            />
          </pattern>
          <pattern
            id="pattern1_76_94"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_76_94"
              transform="scale(0.00172414 0.00229885)"
            />
          </pattern>
          <pattern
            id="pattern2_76_94"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_76_94"
              transform="scale(0.00172414 0.00229885)"
            />
          </pattern>
          <pattern
            id="pattern3_76_94"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_76_94"
              transform="scale(0.00172414 0.00229885)"
            />
          </pattern>
          <pattern
            id="pattern4_76_94"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_76_94"
              transform="scale(0.00172414 0.00229885)"
            />
          </pattern>
          <pattern
            id="pattern5_76_94"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_76_94"
              transform="scale(0.00172414 0.00229885)"
            />
          </pattern>
          <image
            id="image0_76_94"
            data-name="Jet-Fighter-Graphics-4186018-1-1-580x435.png"
            width="580"
            height="435"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </section>
  );
}
