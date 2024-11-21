import { cusUrlFor, fetchData, urlFor } from "@/db/client";
import HeroCycle from "./heroCycle/HeroCycle";
import "./home.scss";
import FleetAnimation from "./fleetAnimation/FleetAnimation";
import Link from "next/link";
export default async function Home() {
  const generalData = await fetchData<any>(`
		*[_type == 'general' && preset == 'main']{
			hero_section , 
			talent_section,
			home_text,
	}[0]
	`);
  const t = generalData.home_text;
  return (
    <main id="page_home" className={""}>
      <section id="hero_section">
        <div className="background dw">
          <video
            src="/video/ocean_final.webm"
            autoPlay
            loop
            muted
            poster="/"
          ></video>
        </div>
        <div className="confine">
          <article className="left">
            <img src="/gfx/icon_main.png" alt="" className="icon dw" />
            <img src="/gfx/logo_main.png" alt="" className="logo" />
            <div className="title">
              <h2 className="first">
                <span className="outline">SAILING THE</span> VIRTUAL SEAS
              </h2>
              <h2 className="second">
                WITH HEARTS FULL AND{" "}
                <img src="/de/mini_decor.png" alt="" className="dw" />
              </h2>
              <h2 className="third">
                <span>EYES ON</span> THE HORIZON
              </h2>
            </div>
            <div className="desc">
              <p>{t.h1}</p>
            </div>

            <div className="cta">
              <Link href={"/about"} className="btn btn-triangle">
                LEARN MORE ABOUT VFLEET
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
              </Link>
            </div>
          </article>
          <HeroCycle
            artList={
              generalData.hero_section.map((image: any) =>
                cusUrlFor(image)?.height(980).auto("format").url()
              ) ?? ["/gfx/hero_art.png", "/gfx/hero_art2.png"]
            }
          />
          <div className="overlay dw"></div>
        </div>
      </section>
      <FleetAnimation />
      <section id="talent-rotate">
        <div className="background"></div>
        <div className="confine">
          <div className="left">
            <h2 className="common-h s flag">TALENTS</h2>
            <p className="common-p">{t.h2}</p>
            <Link href={"/talents"} className="btn btn-triangle yellow">
              SEE OUR TALENT
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
              <div className="endbits">
                <div className="a"></div>
                <div className="b"></div>
              </div>
            </Link>
          </div>
          <HeroCycle
            artList={
              generalData.talent_section.map((image: any) =>
                cusUrlFor(image)?.auto("format").height(1500).url()
              ) ?? ["/gfx/talent_art.png", "/gfx/talent_art.png"]
            }
            duration={3000}
          />
        </div>
      </section>

      <section id="contact-action">
        <div className="background">
          <img src="/gfx/contact-banner.png" alt="" />
        </div>
        <div className="confine">
          <div className="left"></div>
          <div className="right">
            <h2 className="common-h s flag">CONTACT</h2>
            <p className="common-p">{t.h3}</p>
            <Link href={"/contact"} className="btn btn-triangle yellow">
              REACH OUT
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
              <div className="endbits">
                <div className="a"></div>
                <div className="b"></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section id="explore">
        <div className="explore-heading">
          <svg
            width="62"
            height="106"
            viewBox="0 0 62 106"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="r"
          >
            <g clipPath="url(#clip0_240_2394)">
              <rect
                x="1.54027e-05"
                y="8"
                width="63.6396"
                height="63.6396"
                transform="rotate(45 1.54027e-05 8)"
                fill="#161616"
              />
            </g>
            <defs>
              <clipPath id="clip0_240_2394">
                <rect width="62" height="106" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <h2>
            <span className="first">JOIN US AS WE</span>{" "}
            <span className="second">EXPLORE</span>
            <span className="third">NEW HORIZONS.</span>
          </h2>
          <svg
            width="62"
            height="106"
            viewBox="0 0 62 106"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="l"
          >
            <g clipPath="url(#clip0_240_2394)">
              <rect
                x="1.54027e-05"
                y="8"
                width="63.6396"
                height="63.6396"
                transform="rotate(45 1.54027e-05 8)"
                fill="#161616"
              />
            </g>
            <defs>
              <clipPath id="clip0_240_2394">
                <rect width="62" height="106" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="content">
          <div className="mini-confine">
            <div className="left">
              <Link href={"/about"} className="btn btn-triangle ">
                LEARN MORE
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
                <div className="endbits">
                  <div className="a"></div>
                  <div className="b"></div>
                </div>
              </Link>
            </div>
            <div className="right">
              <p>{t.h4}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
