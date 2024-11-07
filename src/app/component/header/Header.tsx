import Link from "next/link";
import "./header.scss";
import { BiMenu } from "react-icons/bi";
export default function Header() {
  return (
    <header id="header">
      <div className="left">
        <Link href={"/"}>
          <img src="/gfx/logo_main.png" alt="" className="main-logo" />
        </Link>
      </div>
      <div className="right">
        <nav>
          <Link href={"/"} className={`btn btn-nav active`}>
            <span>HOME</span>
          </Link>
          <Link href={"/about"} className={`btn btn-nav`}>
            <span>ABOUT</span>
          </Link>
          <Link href={"/talents"} className={`btn btn-nav`}>
            <span>TALENTS</span>
          </Link>
          <Link href={"/donate"} className={`btn btn-nav`}>
            <span>DONATE</span>
          </Link>
          <Link href={"#"} target="_blank" className={`btn btn-nav`}>
            <span>MERCH</span>
          </Link>
          <Link href={"/contact"} className={`btn btn-nav`}>
            <span>CONTACT</span>
          </Link>
        </nav>
        <div className="side-menu">
          <button className="btn btn-openside">
            <BiMenu />
          </button>
        </div>
      </div>
    </header>
  );
}
