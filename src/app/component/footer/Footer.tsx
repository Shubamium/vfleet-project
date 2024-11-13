"use client";
import * as motion from "framer-motion/client";
import Link from "next/link";
import "./footer.scss";
import { FaHeart } from "react-icons/fa";
import SocialList from "../socialList/SocialList";

export default function Footer({ l, r, sm }: any) {
  return (
    <footer id="footer">
      <div className="top-decor">a</div>
      <motion.img
        initial={{ y: 200, x: -100 }}
        whileInView={{ y: 1, x: 0 }}
        transition={{
          duration: 1,
        }}
        src="/de/footer-plane.png"
        alt=""
        className="planetop l"
      />
      <motion.img
        initial={{ y: 200, x: -100 }}
        whileInView={{ y: -50, x: 0 }}
        transition={{
          duration: 1,
        }}
        src="/de/footer-plane.png"
        alt=""
        className="planetop r"
      />
      <div className="decor-l dw">
        <img src="/de/footer-l.png" alt="" />
      </div>
      <div className="footer-part">
        <div className="confine">
          <div className="left">
            <div className="main-info">
              <img src="/gfx/logo_main.png" alt="" />
              <p className="attrib">
                VFLEET PROJECT LLC © Copyright 2023. All Rights Reserved.
              </p>
            </div>
            <nav className="mini-nav">
              <div className="footer-head">
                <h3>NAVIGATION</h3>
                <div className="detail">
                  <div className="line"></div>
                  <img src="/de/mini_plane.png" alt="" className="plane" />
                </div>
              </div>
              <div className="nav-list">
                <Link href={"/"} className="btn btn-mini-nav">
                  Home
                </Link>
                <Link href={"/about"} className="btn btn-mini-nav">
                  About
                </Link>
                <Link href={"/talents"} className="btn btn-mini-nav">
                  Talents
                </Link>
                <Link href={"/donate"} className="btn btn-mini-nav">
                  Donate
                </Link>
                <Link href={"/news"} className="btn btn-mini-nav">
                  News
                </Link>
                <Link
                  href={"https://merch.kawaentertainment.com/"}
                  target="_blank"
                  className="btn btn-mini-nav"
                >
                  Merch
                </Link>
                <Link href={"/contact"} className="btn btn-mini-nav">
                  Contact
                </Link>
                <Link href={"/legal"} className="btn btn-mini-nav">
                  Legal
                </Link>
              </div>
            </nav>
            <div className="additional-info">
              <p>{l}</p>
            </div>
          </div>

          <div className="right">
            <div className="mini-about">
              <div className="art-part">
                <img src={sm} alt="" className="footer-art" />
              </div>
              <div className="text-part">
                <p>{r}</p>
                <div className="battery-contribute">
                  <h3> Want to Contribute?</h3>
                  <Link href={"/donate"} className="btn btn-triangle ">
                    SUPPORT US!
                    <div className="endbits">
                      <div className="a"></div>
                      <div className="b"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="partners">
              <div className="footer-head">
                <h3>OUR PARTNERS</h3>
                <div className="detail">
                  <div className="line"></div>
                  <img src="/de/mini_plane.png" alt="" className="plane" />
                </div>
              </div>
              <div className="partner-list">
                <a
                  target="_blank"
                  href="https://merch.kawaentertainment.com/"
                  className="partner btn"
                >
                  <img src="/gfx/partner1.png" alt="" />
                </a>
                <a
                  target="_blank"
                  href="https://www.studionekoyama.com/"
                  className="partner btn"
                >
                  <img src="/gfx/partner2.png" alt="" />
                </a>
              </div>

              <div className="final-detail">
                <p className="attribution">
                  {" "}
                  built and designed by{" "}
                  <a href="https://x.com/Shubamium2" target="_blank">
                    SHUBAMIUM
                  </a>
                  <FaHeart />
                </p>

                <SocialList />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="decor-r dw">
        <img src="/de/footer-r.png" alt="" />
      </div>
    </footer>
  );
}
