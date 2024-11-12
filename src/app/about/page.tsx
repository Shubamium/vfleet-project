import Link from "next/link";
import GeneralBG from "../component/generalBG/GeneralBG";
import GeneralHeading from "../component/generalHeading/GeneralHeading";
import "./about.scss";
import { fetchData } from "@/db/client";
import Contribution from "./contribution/Contribution";
export default async function AboutPage() {
  const generalData = await fetchData<any>(`
		*[_type == 'general' && preset == 'main']{
			'a1_art':a1_art->url,
			'a2_art': a2_art->url,
		}[0]
	`);
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
            <img src={generalData.a1_art ?? "/gfx/sectionart1.png"} alt="" />
          </figure>
        </div>
        <div className="confine">
          <article className="basic-article">
            <div className="title">
              <p className="common-sh">SUB HEADING 1</p>
              <h2 className="common-h s flag">OUR CORE VALUES</h2>
            </div>
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
            <img src={generalData.a2_art ?? "/gfx/sectionart2.png"} alt="" />
          </figure>
          <div className="div"></div>
        </div>
        <div className="confine">
          <div className="div"></div>

          <article className="basic-article">
            <div className="title">
              <p className="common-sh">SUB HEADING 1</p>
              <h2 className="common-h s flag rv">OUR CORE VALUES</h2>
            </div>
            <p className="common-p">
              (Placholder A1)VFleet is a Vtuber Company that prioritizes the
              needs of talents as well as works towards spreading awareness,
              engagement, and connection with Naval Museums around the world.
            </p>
          </article>
        </div>
      </section>

      <Contribution />
    </main>
  );
}
