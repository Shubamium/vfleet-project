import SocialList from "@/app/component/socialList/SocialList";
import "./read.scss";
import { fetchData, urlFor } from "@/db/client";
import { redirect } from "next/navigation";
import Link from "next/link";
import { PortableText } from "next-sanity";

type Props = {
  params: Promise<{
    id: string;
  }>;
};
export default async function NewsRead({ params }: Props) {
  const id = (await params).id;

  const news = await fetchData<any>(`
		*[_type == 'news' && _id == '${id}']{
			...,
			'category': category -> name,
	}[0]
	`);

  if (!news) {
    redirect("/news");
  }
  const generalData = await fetchData<any>(`
		*[_type == 'general' && preset == 'main']{
			news_text
		}[0]
	`);
  const t = generalData.news_text;
  return (
    <main id="page_read">
      <section id="news-info" className="confine">
        <div className="news-banner">
          <img src={news.banner && urlFor(news.banner).url()} alt="" />
        </div>

        <div className="news-detail">
          <div className="sub-heading">
            <div className="left">
              <p>
                <span className="date">
                  {" "}
                  {new Date(news.date).toDateString()}
                </span>{" "}
                - {news.category}
              </p>
            </div>
            <div className="right">
              <Link href={"/"} className="btn btn-triangle reverse ">
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
              </Link>
            </div>
          </div>
          <h2 className="common-h">{news.title} </h2>
        </div>
      </section>

      <article id="news-data">
        <div className="confine">
          <PortableText
            value={news.post}
            components={{
              types: {
                image: ({ value }) => {
                  return <img src={urlFor(value).url()}></img>;
                },
              },
            }}
          />
          {/* <h1>Main Heading</h1>
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
          </ul> */}
        </div>
      </article>

      <section id="news-footer">
        <div className="confine">
          <div className="footer-content">
            <div className="left">
              <p>{t.n2}</p>
              <SocialList />
            </div>

            <div className="right">
              <a href="#page_read" className="btn btn-triangle reverse ">
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
              </a>
              <Link href={"/news"} className="btn btn-triangle reverse yellow">
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
              </Link>
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
