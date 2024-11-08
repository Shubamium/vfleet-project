import Link from "next/link";
import "./footer.scss";
import { FaDiscord, FaHeart } from "react-icons/fa";
import SocialList from "../socialList/SocialList";
export default function Footer() {
  return (
    <footer id="footer">
      <div className="top-decor">a</div>
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
                <Link href={"/"} className="btn btn-mini-nav">
                  Home
                </Link>
                <Link href={"/"} className="btn btn-mini-nav">
                  Home
                </Link>
                <Link href={"/"} className="btn btn-mini-nav">
                  Home
                </Link>
                <Link href={"/"} className="btn btn-mini-nav">
                  Home
                </Link>
                <Link href={"/"} className="btn btn-mini-nav">
                  Home
                </Link>
                <Link href={"/"} className="btn btn-mini-nav">
                  Home
                </Link>
                <Link href={"/"} className="btn btn-mini-nav">
                  Home
                </Link>
              </div>
            </nav>
            <div className="additional-info">
              <p>
                (Optional Footer Disclaimer)Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis....
              </p>
            </div>
          </div>

          <div className="right">
            <div className="mini-about">
              <div className="art-part">
                <img src="/gfx/footer-art.png" alt="" className="footer-art" />
              </div>
              <div className="text-part">
                <p>
                  (Mini About)Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis....
                </p>
                <div className="battery-contribute">
                  <h3> Want to Contribute?</h3>
                  <button className="btn btn-triangle ">
                    SUPPORT US!
                    <div className="endbits">
                      <div className="a"></div>
                      <div className="b"></div>
                    </div>
                  </button>
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
                <a target="_blank" href="#" className="partner btn">
                  <img src="/gfx/partner1.png" alt="" />
                </a>
                <a target="_blank" href="#" className="partner btn">
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
