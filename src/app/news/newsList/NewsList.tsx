"use client";
import { urlFor } from "@/db/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

type Props = {
  list: any[];
  categories: any[];
};
export default function NewsList({ list, categories }: Props) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [toRender, setToRender] = useState([]);
  const [mappedNews, setMappedNews] = useState(new Map());
  const categoryList = new Map(categories.map((cat) => [cat._id, cat.name]));

  // console.log("render", selectedCategory, newsMap.get(selectedCategory));

  useEffect(() => {
    const newsMap = new Map();
    for (let news of list) {
      if (newsMap.has(news._id)) {
        newsMap.set(news.category, [...newsMap.get(news), news]);
      } else {
        newsMap.set(news.category, [news]);
      }
    }

    setMappedNews(newsMap);
  }, [list]);
  useEffect(() => {
    setToRender(
      selectedCategory === "" ? list : mappedNews.get(selectedCategory)
    );
  }, [selectedCategory]);
  return (
    <section id="news-list">
      <div className="category-select">
        <div className="confine">
          <button
            className={`btn btn-category ${
              selectedCategory === "" ? "selected" : ""
            }`}
            onClick={() => {
              setSelectedCategory("");
            }}
          >
            ALL
          </button>

          {categories.toReversed().map((cat, index) => {
            return (
              <button
                className={`btn btn-category ${
                  selectedCategory === cat._id ? "selected" : ""
                }`}
                key={"cat-select" + cat._id}
                onClick={() => {
                  setSelectedCategory(cat._id);
                }}
              >
                {cat.name}
              </button>
            );
          })}
          {/* <button className="btn btn-category">TALENT</button>
          <button className="btn btn-category">ANNOUNCEMENT</button>
          <button className="btn btn-category">OTHER</button> */}
        </div>
      </div>

      <div className="news-list confine">
        {toRender &&
          toRender.map((news: any, index: number) => {
            let time = new Date(news.date);
            return (
              <div className="news" key={"news-list" + news._id}>
                <div className="thumbnail">
                  <img
                    src={urlFor(news.banner).url() ?? ""}
                    alt=""
                    className="thumb"
                  />
                </div>
                <div className="detail">
                  <div className="heading">
                    <div className="top-detail">
                      <p className="category">
                        {categoryList.get(news.category)}
                      </p>
                      <p className="date"> {time.toDateString()}</p>
                    </div>
                    <h2 className="common-h s">{news.title}</h2>
                  </div>
                  <p className="common-p">{news.excerpt}</p>

                  <div className="action">
                    <Link
                      href={`/news/read/${news._id}`}
                      className=" btn btn-outline"
                    >
                      READ MORE
                      <FaArrowRightLong />
                    </Link>
                  </div>

                  <div className="decor-zig"></div>
                  <div className="decor-corner-l "></div>
                  <div className="decor-corner-r"></div>
                </div>
              </div>
            );
          })}
        {/* <div className="news">
          <div className="thumbnail">
            <img alt="" className="thumb" />
          </div>
          <div className="detail">
            <div className="heading">
              <div className="top-detail">
                <p className="category">CATEGORY</p>
                <p className="date"> 31 FEBRUARY 2024</p>
              </div>
              <h2 className="common-h s">POST TITLE HERE</h2>
            </div>
            <p className="common-p">
              (Excerpt of the news) We encourage you to support our talents on
              their streaming journeys, however, VFleet asks you to consider
              donating to the nonprofit naval and aerospace museums that
              inspired this project.
            </p>

            <div className="action">
              <button className=" btn btn-outline">
                READ MORE
                <FaArrowRightLong />
              </button>
            </div>

            <div className="decor-zig"></div>
            <div className="decor-corner-l "></div>
            <div className="decor-corner-r"></div>
          </div>
        </div>
        <div className="news">
          <div className="thumbnail">
            <img alt="" className="thumb" />
          </div>
          <div className="detail">
            <div className="heading">
              <div className="top-detail">
                <p className="category">CATEGORY</p>
                <p className="date"> 31 FEBRUARY 2024</p>
              </div>
              <h2 className="common-h s">POST TITLE HERE</h2>
            </div>
            <p className="common-p">
              (Excerpt of the news) We encourage you to support our talents on
              their streaming journeys, however, VFleet asks you to consider
              donating to the nonprofit naval and aerospace museums that
              inspired this project.
            </p>

            <div className="action">
              <button className=" btn btn-outline">
                READ MORE
                <FaArrowRightLong />
              </button>
            </div>

            <div className="decor-zig"></div>
            <div className="decor-corner-l "></div>
            <div className="decor-corner-r"></div>
          </div>
        </div>
        <div className="news">
          <div className="thumbnail">
            <img alt="" className="thumb" />
          </div>
          <div className="detail">
            <div className="heading">
              <div className="top-detail">
                <p className="category">CATEGORY</p>
                <p className="date"> 31 FEBRUARY 2024</p>
              </div>
              <h2 className="common-h s">POST TITLE HERE</h2>
            </div>
            <p className="common-p">
              (Excerpt of the news) We encourage you to support our talents on
              their streaming journeys, however, VFleet asks you to consider
              donating to the nonprofit naval and aerospace museums that
              inspired this project.
            </p>

            <div className="action">
              <button className=" btn btn-outline">
                READ MORE
                <FaArrowRightLong />
              </button>
            </div>

            <div className="decor-zig"></div>
            <div className="decor-corner-l "></div>
            <div className="decor-corner-r"></div>
          </div>
        </div>
        <div className="news">
          <div className="thumbnail">
            <img alt="" className="thumb" />
          </div>
          <div className="detail">
            <div className="heading">
              <div className="top-detail">
                <p className="category">CATEGORY</p>
                <p className="date"> 31 FEBRUARY 2024</p>
              </div>
              <h2 className="common-h s">POST TITLE HERE</h2>
            </div>
            <p className="common-p">
              (Excerpt of the news) We encourage you to support our talents on
              their streaming journeys, however, VFleet asks you to consider
              donating to the nonprofit naval and aerospace museums that
              inspired this project.
            </p>

            <div className="action">
              <button className=" btn btn-outline">
                READ MORE
                <FaArrowRightLong />
              </button>
            </div>

            <div className="decor-zig"></div>
            <div className="decor-corner-l "></div>
            <div className="decor-corner-r"></div>
          </div>
        </div>
        <div className="news">
          <div className="thumbnail">
            <img alt="" className="thumb" />
          </div>
          <div className="detail">
            <div className="heading">
              <div className="top-detail">
                <p className="category">CATEGORY</p>
                <p className="date"> 31 FEBRUARY 2024</p>
              </div>
              <h2 className="common-h s">POST TITLE HERE</h2>
            </div>
            <p className="common-p">
              (Excerpt of the news) We encourage you to support our talents on
              their streaming journeys, however, VFleet asks you to consider
              donating to the nonprofit naval and aerospace museums that
              inspired this project.
            </p>

            <div className="action">
              <button className=" btn btn-outline">
                READ MORE
                <FaArrowRightLong />
              </button>
            </div>

            <div className="decor-zig"></div>
            <div className="decor-corner-l "></div>
            <div className="decor-corner-r"></div>
          </div>
        </div>
        <div className="news">
          <div className="thumbnail">
            <img alt="" className="thumb" />
          </div>
          <div className="detail">
            <div className="heading">
              <div className="top-detail">
                <p className="category">CATEGORY</p>
                <p className="date"> 31 FEBRUARY 2024</p>
              </div>
              <h2 className="common-h s">POST TITLE HERE</h2>
            </div>
            <p className="common-p">
              (Excerpt of the news) We encourage you to support our talents on
              their streaming journeys, however, VFleet asks you to consider
              donating to the nonprofit naval and aerospace museums that
              inspired this project.
            </p>

            <div className="action">
              <button className=" btn btn-outline">
                READ MORE
                <FaArrowRightLong />
              </button>
            </div>

            <div className="decor-zig"></div>
            <div className="decor-corner-l "></div>
            <div className="decor-corner-r"></div>
          </div>
        </div>
        <div className="news">
          <div className="thumbnail">
            <img alt="" className="thumb" />
          </div>
          <div className="detail">
            <div className="heading">
              <div className="top-detail">
                <p className="category">CATEGORY</p>
                <p className="date"> 31 FEBRUARY 2024</p>
              </div>
              <h2 className="common-h s">POST TITLE HERE</h2>
            </div>
            <p className="common-p">
              (Excerpt of the news) We encourage you to support our talents on
              their streaming journeys, however, VFleet asks you to consider
              donating to the nonprofit naval and aerospace museums that
              inspired this project.
            </p>

            <div className="action">
              <button className=" btn btn-outline">
                READ MORE
                <FaArrowRightLong />
              </button>
            </div>

            <div className="decor-zig"></div>
            <div className="decor-corner-l "></div>
            <div className="decor-corner-r"></div>
          </div>
        </div>
        <div className="news">
          <div className="thumbnail">
            <img alt="" className="thumb" />
          </div>
          <div className="detail">
            <div className="heading">
              <div className="top-detail">
                <p className="category">CATEGORY</p>
                <p className="date"> 31 FEBRUARY 2024</p>
              </div>
              <h2 className="common-h s">POST TITLE HERE</h2>
            </div>
            <p className="common-p">
              (Excerpt of the news) We encourage you to support our talents on
              their streaming journeys, however, VFleet asks you to consider
              donating to the nonprofit naval and aerospace museums that
              inspired this project.
            </p>

            <div className="action">
              <button className=" btn btn-outline">
                READ MORE
                <FaArrowRightLong />
              </button>
            </div>

            <div className="decor-zig"></div>
            <div className="decor-corner-l "></div>
            <div className="decor-corner-r"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
