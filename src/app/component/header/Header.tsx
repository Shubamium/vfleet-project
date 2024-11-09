"use client";
import Link from "next/link";
import "./header.scss";
import { BiMenu } from "react-icons/bi";
import { FaAnchor } from "react-icons/fa";
import ScrollAnchor from "./scrollAnchor/ScrollAnchor";
import { usePathname } from "next/navigation";
export default function Header() {
  const path = usePathname();
  console.log(path);
  return (
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
            className={`btn btn-nav ${path.includes("about") ? "active" : ""}`}
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
            className={`btn btn-nav ${path.includes("donate") ? "active" : ""}`}
          >
            <span>DONATE</span>
          </Link>
          <Link
            href={"/news"}
            className={`btn btn-nav ${path.includes("news") ? "active" : ""}`}
          >
            <span>NEWS</span>
          </Link>
          <a href={"#"} target="_blank" className={`btn btn-nav`}>
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
          <button className="btn btn-openside">
            <BiMenu />
          </button>
          <ScrollAnchor />
        </div>
      </div>
    </header>
  );
}
