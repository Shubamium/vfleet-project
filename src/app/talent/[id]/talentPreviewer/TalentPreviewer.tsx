"use client";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";
type Props = {};

export default function TalentPreviewer({}: Props) {
  const [show, setShow] = useState(false);
  return (
    <main id="page_talent" className={`${show ? "show" : "hidden"}`}>
      <div className="main-bg">
        <div className="bg-left"></div>
        <div className="bg-right">
          <img
            src="/gfx/talent-background-sample-art.png"
            alt=""
            className="talent"
          />
          <img src="/gfx/preview-art.png" alt="" className="talent-tall-art" />
          {/* <img src="/gfx/lexi-full.png" alt="" className="talent-full-art" /> */}
          {/* <button className="btn btn-triangle reverse btn-full ">
				<div className="triangle">
					<div className="arrow-line"></div>
					<svg
						width="75"
						height="87"
						viewBox="0 0 75 87"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="arrow"
					>
						<path
							d="M75 43.3013L-3.78552e-06 86.6025L0 -3.27835e-06L75 43.3013Z"
							fill="#D9D9D9"
						/>
					</svg>
				</div>
				VIEW FULLSCREEN
				<div className="endbits">
					<div className="a"></div>
					<div className="b"></div>
				</div>
			</button> */}
        </div>
      </div>

      <section id="talent-detail" className="content confine">
        <div className="detail">
          <div className="top-detail">
            <div className="socials">
              <a href={"#"} target="_blank" className="btn btn-social">
                <FaXTwitter />
              </a>
              <a href={"#"} target="_blank" className="btn btn-social">
                <FaXTwitter />
              </a>
              <a href={"#"} target="_blank" className="btn btn-social">
                <FaXTwitter />
              </a>
            </div>

            <div className="names">
              <div className="title">
                <p className="common-sh">SHIPNAME/TITLE</p>
              </div>
              <h2 className="common-h s">TALENT NAME</h2>
            </div>
          </div>

          <div className="description">
            <p>
              (Placeholder) FA.ye is a F/A-18 E/F who has the need for speed.
              She wa inducted into the Blue Angels, and loves soaring in the sky
              with her sisters while making people smile! One day during a Blue
              Angels air show, FA.ye’s pilot attempted to push her limits and
              reach Mach 11, but it ended up causing a dimensional rift in the
              space-time continuum.
            </p>
            <p>
              The jet and pilot were fused into one being, and the sentient jet
              girl FA.ye-18 was born! FA.ye now spends her days following her
              passions, whether it be flying, gaming, singing, or hanging out
              with her lovely VFleet shipsters. Despite her mature appearance,
              she’s generally very innocent and naive and gets easily flustered
              when people point out her pair of large….wings. FA.ye’s wish is to
              inspire others to soar to new heights and help VFleet’s mission of
              preserving living history.
            </p>
          </div>

          <div className="info-table">
            <div className="chibi">
              <img src="/gfx/chibi.png" alt="" />
            </div>
            <div className="info-list">
              <h4>INFO HEADING</h4>
              <p>TALENT INFO CONTEXT FILL</p>
            </div>
            <div className="info-list">
              <h4>INFO HEADING</h4>
              <p>TALENT INFO CONTEXT FILL</p>
            </div>
            <div className="info-list">
              <h4>INFO HEADING</h4>
              <p>TALENT INFO CONTEXT FILL</p>
            </div>
            <div className="info-list">
              <h4>INFO HEADING</h4>
              <p>TALENT INFO CONTEXT FILL</p>
            </div>
            <div className="info-list">
              <h4>INFO HEADING</h4>
              <p>TALENT INFO CONTEXT FILL</p>
            </div>
            <div className="info-list">
              <h4>INFO HEADING</h4>
              <p>TALENT INFO CONTEXT FILL</p>
            </div>
          </div>

          <div className="action">
            <Link href={"/talents"} className="btn btn-triangle reverse ">
              <div className="endbits">
                <div className="a"></div>
                <div className="b"></div>
              </div>
              <div className="triangle">
                <div className="arrow-line"></div>
                <svg
                  width="75"
                  height="87"
                  viewBox="0 0 75 87"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="arrow"
                >
                  <path
                    d="M75 43.3013L-3.78552e-06 86.6025L0 -3.27835e-06L75 43.3013Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </div>
              TALENT LIST
            </Link>
          </div>
        </div>
        <div className="div"></div>
      </section>
      <div className="main-art">
        <div className="bg-left"></div>
        <div className="bg-right">
          <img src="/gfx/lexi-full.png" alt="" className="talent-full-art" />
          <button
            className="btn btn-triangle reverse btn-full yellow "
            onClick={() => {
              setShow((show) => !show);
            }}
          >
            {!show ? "VIEW FULLSCREEN" : "VIEW DETAIL"}
          </button>
        </div>
      </div>
    </main>
  );
}
