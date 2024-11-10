import { cusUrlFor, fetchData, urlFor } from "@/db/client";
import GeneralBG from "../component/generalBG/GeneralBG";
import GeneralHeading from "../component/generalHeading/GeneralHeading";
import "./donate.scss";
export default async function Donate() {
  const donationList = await fetchData<any[]>(`
			*[_type == 'donation']{
			...
			}
	`);

  return (
    <main id="page_donate">
      <GeneralBG />
      <section id="donation-heading">
        <GeneralHeading
          sub="SUPPORT"
          h="DONATIONS"
          d="(Placeholeder D1)VFleet is a Vtuber Company that prioritizes the needs of  talents as well as works towards spreading awareness, engagement, and  connection with Naval Museums around the world."
        />
      </section>
      <section id="donation-list">
        <div className="confine">
          {donationList &&
            donationList.map((item, index) => {
              return (
                <div className="donation" key={"donate_list" + item._id}>
                  <img
                    src={
                      cusUrlFor(item.image)?.height(500).url() ??
                      "/gfx/museum-image-placeholder.png"
                    }
                    alt=""
                    className="donation-image"
                  />
                  <img src="/de/ship-decor.png" alt="" className="ship-decor" />
                  <div className="content">
                    <h2 className="common-h">{item.name} </h2>
                    <a
                      href={item.link}
                      target="_blank"
                      className="btn btn-triangle "
                    >
                      DONATE
                      <div className="endbits">
                        <div className="a"></div>
                        <div className="b"></div>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          {/* <div className="donation">
            <img
              src="/gfx/museum-image-placeholder.png"
              alt=""
              className="donation-image"
            />
            <img src="/de/ship-decor.png" alt="" className="ship-decor" />
            <div className="content">
              <h2 className="common-h"> USS LEXINGTON MUSEUM</h2>
              <a href="#" target="_blank" className="btn btn-triangle ">
                DONATE
                <div className="endbits">
                  <div className="a"></div>
                  <div className="b"></div>
                </div>
              </a>
            </div>
          </div>
          <div className="donation">
            <img
              src="/gfx/museum-image-placeholder.png"
              alt=""
              className="donation-image"
            />
            <img src="/de/ship-decor.png" alt="" className="ship-decor" />
            <div className="content">
              <h2 className="common-h"> USS LEXINGTON MUSEUM</h2>
              <a href="#" target="_blank" className="btn btn-triangle ">
                DONATE
                <div className="endbits">
                  <div className="a"></div>
                  <div className="b"></div>
                </div>
              </a>
            </div>
          </div>
          <div className="donation">
            <img
              src="/gfx/museum-image-placeholder.png"
              alt=""
              className="donation-image"
            />
            <img src="/de/ship-decor.png" alt="" className="ship-decor" />
            <div className="content">
              <h2 className="common-h"> USS LEXINGTON MUSEUM</h2>
              <a href="#" target="_blank" className="btn btn-triangle ">
                DONATE
                <div className="endbits">
                  <div className="a"></div>
                  <div className="b"></div>
                </div>
              </a>
            </div>
          </div>
          <div className="donation">
            <img
              src="/gfx/museum-image-placeholder.png"
              alt=""
              className="donation-image"
            />
            <img src="/de/ship-decor.png" alt="" className="ship-decor" />
            <div className="content">
              <h2 className="common-h"> USS LEXINGTON MUSEUM</h2>
              <a href="#" target="_blank" className="btn btn-triangle ">
                DONATE
                <div className="endbits">
                  <div className="a"></div>
                  <div className="b"></div>
                </div>
              </a>
            </div>
          </div>
          <div className="donation">
            <img
              src="/gfx/museum-image-placeholder.png"
              alt=""
              className="donation-image"
            />
            <img src="/de/ship-decor.png" alt="" className="ship-decor" />
            <div className="content">
              <h2 className="common-h"> USS LEXINGTON MUSEUM</h2>
              <a href="#" target="_blank" className="btn btn-triangle ">
                DONATE
                <div className="endbits">
                  <div className="a"></div>
                  <div className="b"></div>
                </div>
              </a>
            </div>
          </div>
          <div className="donation">
            <img
              src="/gfx/museum-image-placeholder.png"
              alt=""
              className="donation-image"
            />
            <img src="/de/ship-decor.png" alt="" className="ship-decor" />
            <div className="content">
              <h2 className="common-h"> USS LEXINGTON MUSEUM</h2>
              <a href="#" target="_blank" className="btn btn-triangle ">
                DONATE
                <div className="endbits">
                  <div className="a"></div>
                  <div className="b"></div>
                </div>
              </a>
            </div>
          </div>
          <div className="donation">
            <img
              src="/gfx/museum-image-placeholder.png"
              alt=""
              className="donation-image"
            />
            <img src="/de/ship-decor.png" alt="" className="ship-decor" />
            <div className="content">
              <h2 className="common-h"> USS LEXINGTON MUSEUM</h2>
              <a href="#" target="_blank" className="btn btn-triangle ">
                DONATE
                <div className="endbits">
                  <div className="a"></div>
                  <div className="b"></div>
                </div>
              </a>
            </div>
          </div>
          <div className="donation">
            <img
              src="/gfx/museum-image-placeholder.png"
              alt=""
              className="donation-image"
            />
            <img src="/de/ship-decor.png" alt="" className="ship-decor" />
            <div className="content">
              <h2 className="common-h"> USS LEXINGTON MUSEUM</h2>
              <a href="#" target="_blank" className="btn btn-triangle ">
                DONATE
                <div className="endbits">
                  <div className="a"></div>
                  <div className="b"></div>
                </div>
              </a>
            </div>
          </div>
          <div className="donation">
            <img
              src="/gfx/museum-image-placeholder.png"
              alt=""
              className="donation-image"
            />
            <img src="/de/ship-decor.png" alt="" className="ship-decor" />
            <div className="content">
              <h2 className="common-h"> USS LEXINGTON MUSEUM</h2>
              <a href="#" target="_blank" className="btn btn-triangle ">
                DONATE
                <div className="endbits">
                  <div className="a"></div>
                  <div className="b"></div>
                </div>
              </a>
            </div>
          </div>
          <div className="donation">
            <img
              src="/gfx/museum-image-placeholder.png"
              alt=""
              className="donation-image"
            />
            <img src="/de/ship-decor.png" alt="" className="ship-decor" />
            <div className="content">
              <h2 className="common-h"> USS LEXINGTON MUSEUM</h2>
              <a href="#" target="_blank" className="btn btn-triangle ">
                DONATE
                <div className="endbits">
                  <div className="a"></div>
                  <div className="b"></div>
                </div>
              </a>
            </div>
          </div>
          <div className="donation">
            <img
              src="/gfx/museum-image-placeholder.png"
              alt=""
              className="donation-image"
            />
            <img src="/de/ship-decor.png" alt="" className="ship-decor" />
            <div className="content">
              <h2 className="common-h"> USS LEXINGTON MUSEUM</h2>
              <a href="#" target="_blank" className="btn btn-triangle ">
                DONATE
                <div className="endbits">
                  <div className="a"></div>
                  <div className="b"></div>
                </div>
              </a>
            </div>
          </div> */}
        </div>
      </section>
    </main>
  );
}
