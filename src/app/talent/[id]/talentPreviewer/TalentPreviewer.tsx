"use client";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";
import { PortableText } from "next-sanity";
import { cusUrlFor, urlFor } from "@/db/client";
import { FaTwitch, FaYoutube } from "react-icons/fa";
import { useRouter } from "next/navigation";
type Props = {
  t: any;
};

export default function TalentPreviewer({ t }: Props) {
  const [show, setShow] = useState(false);
  const router = useRouter();
  return (
    <main id="page_talent" className={`${show ? "show" : "hidden"}`}>
      <div className="main-bg">
        <div className="bg-left"></div>
        <div className="bg-right">
          <div className="ov-hexa dw"></div>
          <img
            src={cusUrlFor(t.art.background)?.height(1080).url()}
            alt=""
            className="talent"
          />
          <img
            src={cusUrlFor(t.art.detail_main)?.height(1580).url()}
            alt=""
            className="talent-tall-art"
          />

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
            {t.socials && (
              <div className="socials">
                <a
                  href={t.socials.twitter}
                  target="_blank"
                  className="btn btn-social"
                >
                  <FaXTwitter />
                </a>
                <a
                  href={t.socials.twitch}
                  target="_blank"
                  className="btn btn-social"
                >
                  <FaTwitch />
                </a>
                <a
                  href={t.socials.youtube}
                  target="_blank"
                  className="btn btn-social"
                >
                  <FaYoutube />
                </a>
              </div>
            )}

            <div className="names">
              <div className="title">
                <p className="common-sh">{t.title}</p>
              </div>
              <h2 className="common-h s">{t.name}</h2>
            </div>
          </div>

          <div className="description">
            <PortableText value={t.description} />
          </div>

          <div className="info-table">
            <div className="chibi">
              <img
                src={cusUrlFor(t.art.detail_small)?.width(200).url()}
                alt=""
              />
            </div>
            {t.info &&
              t.info.map((info: any, index: number) => {
                return (
                  <div className="info-list" key={"info-list-" + index}>
                    <h4>{info.title}</h4>
                    <p>{info.value}</p>
                  </div>
                );
              })}
            {/* <div className="info-list">
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
            </div> */}
          </div>

          <div className="action">
            <Link
              href={"/talents"}
              onClick={() => {
                router.back();
              }}
              className="btn btn-triangle reverse "
            >
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
        <div className="div dw"></div>
      </section>
      <div className="main-art">
        <div className="bg-left dw"></div>
        <div className="bg-right">
          <div className="overlay"></div>
          <img
            src={cusUrlFor(t.art.detail_full)?.height(1080).url()}
            alt=""
            className="talent-full-art"
          />
          <img
            src={cusUrlFor(t.art.icon)?.width(400).url()}
            alt=""
            className="icon"
          />
          <img
            src={cusUrlFor(t.art.logo)?.width(400).url()}
            alt=""
            className="logo"
          />
          <button
            className="btn btn-triangle reverse btn-full yellow "
            onClick={() => {
              setShow((show) => !show);
            }}
          >
            {!show ? "FULL VIEW" : "SMALL VIEW"}
          </button>
        </div>
      </div>
    </main>
  );
}
