"use client";
import Link from "next/link";
import "./header.scss";
import { BiMenu } from "react-icons/bi";
import ScrollAnchor from "./scrollAnchor/ScrollAnchor";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaHome, FaShip } from "react-icons/fa";
import { BsArrowReturnLeft } from "react-icons/bs";
import { stagger, useAnimate } from "framer-motion";
export default function Header() {
  const path = usePathname();
  const [sidebar, setSidebar] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animateSidebar(sidebar);
  }, [sidebar]);

  const animateSidebar = async (sidebar: boolean) => {
    if (sidebar) {
      await animate(".btn-nav span", {
        x: -800,
        transitionDuration: 0,
      });
      animate(
        ".btn-nav span",
        {
          x: 0,
        },
        {
          duration: 0.5,
          type: "spring",
          delay: stagger(0.1, {
            startDelay: 0,
          }),
        }
      );
    } else {
      // await animate("nav li", {
      //   x: 100,
      // });
    }
  };

  return (
    <>
      <header id="header">
        <div className="left">
          <Link href={"/"}>
            <img src="/gfx/logo_main.png" alt="" className="main-logo" />
          </Link>
        </div>
        <div className="right">
          <nav>
            <Link
              href={"/"}
              className={`btn btn-nav ${path === "/" ? "active" : ""}`}
            >
              <span>HOME</span>
            </Link>
            <Link
              href={"/about"}
              className={`btn btn-nav ${
                path.includes("about") ? "active" : ""
              }`}
            >
              <span>ABOUT</span>
            </Link>
            <Link
              href={"/talents"}
              className={`btn btn-nav ${
                path.includes("talents") ? "active" : ""
              }`}
            >
              <span>TALENTS</span>
            </Link>
            <Link
              href={"/donate"}
              className={`btn btn-nav ${
                path.includes("donate") ? "active" : ""
              }`}
            >
              <span>DONATE</span>
            </Link>
            <Link
              href={"/news"}
              className={`btn btn-nav ${path.includes("news") ? "active" : ""}`}
            >
              <span>NEWS</span>
            </Link>
            <a
              href={
                "https://merch.kawaentertainment.com/collections/vfleet-project"
              }
              target="_blank"
              className={`btn btn-nav`}
            >
              <span>MERCH</span>
            </a>
            <Link
              href={"/contact"}
              className={`btn btn-nav ${
                path.includes("contact") ? "active" : ""
              }`}
            >
              <span>CONTACT</span>
            </Link>
          </nav>
          <div className="side-menu">
            <button
              className="btn btn-openside"
              onClick={() => {
                setSidebar(true);
              }}
            >
              <BiMenu />
            </button>
            <ScrollAnchor />
          </div>
        </div>
      </header>
      <aside
        id="sidebar"
        className={sidebar ? "open" : "close"}
        onClickCapture={() => {
          setSidebar(false);
        }}
        ref={scope}
      >
        <div className="bar">
          <nav>
            <Link href={"/"} className={`btn btn-nav`}>
              <span>HOME</span>
            </Link>
            <Link href={"/about"} className={`btn btn-nav `}>
              <span>ABOUT</span>
            </Link>
            <Link href={"/talents"} className={`btn btn-nav `}>
              <span>TALENTS</span>
            </Link>
            <Link href={"/donate"} className={`btn btn-nav`}>
              <span>DONATE</span>
            </Link>
            <Link href={"/news"} className={`btn btn-nav `}>
              <span>NEWS</span>
            </Link>
            <a
              href={
                "https://merch.kawaentertainment.com/collections/vfleet-project"
              }
              target="_blank"
              className={`btn btn-nav`}
            >
              <span>MERCH</span>
            </a>
            <Link href={"/contact"} className={`btn btn-nav `}>
              <span>CONTACT</span>
            </Link>
            <Link href={"/contact"} className={`btn btn-nav back`}>
              <span>
                <BsArrowReturnLeft />
                CLOSE
              </span>
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
}
