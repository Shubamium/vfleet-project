import { cusUrlFor, fetchData, urlFor } from "@/db/client";
import HeroCycle from "./heroCycle/HeroCycle";
import "./home.scss";
import FleetAnimation from "./fleetAnimation/FleetAnimation";
export default async function Home() {
  const generalData = await fetchData<any>(`
		*[_type == 'general' && preset == 'main']{
			hero_section , 
			talent_section,
	}[0]
	`);
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
              <p>
                (Placeholder H1) dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
            </div>

            <div className="cta">
              <button className="btn btn-triangle">
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
              </button>
            </div>
          </article>
          <HeroCycle
            artList={
              generalData.hero_section.map((image: any) =>
                cusUrlFor(image)?.height(1080).url()
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
            <p className="common-p">
              (Placeholder H2) dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehend
            </p>
            <button className="btn btn-triangle yellow">
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
            </button>
          </div>
          <HeroCycle
            artList={
              generalData.talent_section.map((image: any) =>
                cusUrlFor(image)?.height(1280).url()
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
            <p className="common-p">
              (Placeholder H2) dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehend
            </p>
            <button className="btn btn-triangle yellow">
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
            </button>
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
              <button className="btn btn-triangle ">
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
              </button>
            </div>
            <div className="right">
              <p>
                (PLACEHOLDER H4) ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
