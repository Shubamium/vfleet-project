import SocialList from "@/app/component/socialList/SocialList";
import "./read.scss";
export default function NewsRead() {
  return (
    <main id="page_read">
      <section id="news-info" className="confine">
        <div className="news-banner">
          <img src="/" alt="" />
        </div>

        <div className="news-detail">
          <div className="sub-heading">
            <div className="left">
              <p>
                <span className="date"> 22 JANUARY 2024</span> - CATEGORY
              </p>
            </div>
            <div className="right">
              <button className="btn btn-triangle reverse ">
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
                NEWS LIST
              </button>
            </div>
          </div>
          <h2 className="common-h">NEWS TITLE HERE bla bla bla bla bla </h2>
        </div>
      </section>

      <article id="news-data">
        <div className="confine">
          <h1>Main Heading</h1>
          <h2>Second Heading</h2>
          <p>
            We encourage you to support our talents on their streaming journeys,
            however, VFleet asks you to consider donating to the nonprofit naval
            and aerospace museums that inspired this project. If there is a
            museum ship near you, we encourage not only a donation, but a visit
            as well! Your support matters!We encourage you to support our
            talents on their streaming journeys, however, VFleet asks you to
            consider donating to the nonprofit naval and aerospace museums that
            inspired this project. If there is a museum ship near you, we
            encourage not only a donation, but a visit as well!
          </p>
          <ul></ul>
          <a href="#">link looks like this</a>
          <img src="/gfx/talent_art.png" alt="" />
          <ul>
            <li>list item</li>
            <li>list item</li>
            <li>list item</li>
          </ul>
        </div>
      </article>

      <section id="news-footer">
        <div className="confine">
          <div className="footer-content">
            <div className="left">
              <p>Some footer text here</p>
              <SocialList />
            </div>

            <div className="right">
              <button className="btn btn-triangle reverse ">
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
                TO THE TOP
                <div className="endbits">
                  <div className="a"></div>
                  <div className="b"></div>
                </div>
              </button>
              <button className="btn btn-triangle reverse yellow">
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
                NEWS LIST
                <div className="endbits">
                  <div className="a"></div>
                  <div className="b"></div>
                </div>
              </button>
            </div>
          </div>

          <div className="footer-bg">
            <img src="/de/news-foot-decor.png" alt="" className="" />
          </div>
          <div className="footer-art">
            <img src="/gfx/news-group-art.png" alt="" className="" />
          </div>
        </div>
      </section>
    </main>
  );
}
