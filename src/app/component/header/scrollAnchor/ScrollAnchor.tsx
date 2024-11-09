"use client";
import React, { useEffect, useState } from "react";
import { FaAnchor } from "react-icons/fa";
import "./scrollAnchor.scss";
import { BiArrowToTop } from "react-icons/bi";
type Props = {};

export default function ScrollAnchor({}: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setProgress(
        window.scrollY / (document.body.offsetHeight - window.innerHeight)
      );
    });
  }, []);

  const isComplete = progress <= 0.9;
  return (
    <div className="anchor-select">
      <div className="anchor" style={{ height: `${progress * 80}vh` }}></div>
      {isComplete ? (
        <FaAnchor
          className="select"
          onClick={() => {
            window.scroll({ top: 0, behavior: "smooth" });
          }}
        />
      ) : (
        <BiArrowToTop
          className="select"
          onClick={() => {
            window.scroll({ top: 0, behavior: "smooth" });
          }}
        />
      )}
    </div>
  );
}
