import Link from "next/link";
import GeneralBG from "../component/generalBG/GeneralBG";
import GeneralHeading from "../component/generalHeading/GeneralHeading";
import "./about.scss";
export default function AboutPage() {
  return (
    <main id="page_about">
      <GeneralBG />
      <GeneralHeading sub="ABOUT US" h="WE ARE VFLEET" />
      <section id="about_mission">
        <div className="panel">
          <img src="/gfx/flag.png" alt="" className="banner-art" />
          <p>
            Our mission is to <strong>develop</strong> and{" "}
            <strong>empower</strong> creators by offering support to bring their
            unique passion to the virtual seas. While doing so, our talents hope
            to raise awareness and support for the nonprofit foundations that
            are charged with preserving and restoring naval ship museums as well
            as restoring aircraft.
          </p>
          <p>
            Through <strong>entertainment and community building</strong>,
            VFleet seeks to aid in their mission of preservation!
          </p>

          <div className="side tl"></div>
          <div className="side tr"></div>
          <div className="side bl"></div>
          <div className="side br"></div>
        </div>
      </section>

      <section className="basic-section">
        <div className="side">
          <div className="div"></div>
          <figure>
            <img src="/gfx/sectionart1.png" alt="" />
          </figure>
        </div>
        <div className="confine">
          <article className="basic-article">
            <p className="common-sh">SUB HEADING 1</p>
            <p className="common-h s">OUR CORE VALUES</p>
            <p className="common-p">
              (Placholder A1)VFleet is a Vtuber Company that prioritizes the
              needs of talents as well as works towards spreading awareness,
              engagement, and connection with Naval Museums around the world.
            </p>
          </article>
          <div className="div"></div>
        </div>
      </section>
      <section className="basic-section reverse">
        <div className="side">
          <figure>
            <img src="/gfx/sectionart2.png" alt="" />
          </figure>
          <div className="div"></div>
        </div>
        <div className="confine">
          <div className="div"></div>

          <article className="basic-article">
            <p className="common-sh">SUB HEADING 1</p>
            <p className="common-h s">OUR CORE VALUES</p>
            <p className="common-p">
              (Placholder A1)VFleet is a Vtuber Company that prioritizes the
              needs of talents as well as works towards spreading awareness,
              engagement, and connection with Naval Museums around the world.
            </p>
          </article>
        </div>
      </section>

      <section id="contribution">
        <div className="plane-art">
          <img src="/de/plane-art-down.png" />
        </div>
        <article className="confine">
          <div className="line"></div>
          <img src="/gfx/icon_black.png" alt="" className="icon" />
          <h2 className="common-sh">CONTRIBUTION</h2>
          <h2 className="common-h">DONATIONS & SUPPORT</h2>
          <p className="common-p">
            We encourage you to support our talents on their streaming journeys,
            however, VFleet asks you to consider donating to the nonprofit naval
            and aerospace museums that inspired this project. If there is a
            museum ship near you, we encourage not only a donation, but a visit
            as well! Your support matters!
          </p>
        </article>
        <Link href={"/donate"} className="btn btn-special">
          {" "}
          DONATE
        </Link>
      </section>
    </main>
  );
}
