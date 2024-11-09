import { FaArrowRightLong } from "react-icons/fa6";
import GeneralBG from "../component/generalBG/GeneralBG";
import "./news.scss";
import NewsList from "./newsList/NewsList";
import { fetchData } from "@/db/client";
export default async function NewsPage() {
  const allNews = await fetchData<any[]>(`
		*[_type == 'news']{
		_id,
		date,
		excerpt,
		title,
		banner,
		'category': category->_id,
		}
	`);
  const allCategory = await fetchData<any[]>(`
		*[_type == 'news_category']{
		...
		}
	`);
  return (
    <main id="page_news">
      <GeneralBG />
      <section id="news-heading" className="confine">
        <img src="/gfx/icon_black.png" alt="" className="icon" />
        <p className="common-sh">STAY UPDATED</p>
        <div className="heading-line">
          <h1 className="common-h">NEWS & INFO</h1>
          <div className="line"></div>
          <img src="/de/mini_plane-gold.png" alt="" className="plane" />
        </div>
        <p className="common-p">
          We encourage you to support our talents on their streaming journeys,
          however, VFleet asks you to consider donating to the nonprofit naval
          and aerospace museums that inspired this project. If there is a museum
          ship near you, we encourage not only a donation, but a visit as well!
          Your support matters!
        </p>
      </section>

      <NewsList list={allNews} categories={allCategory} />
    </main>
  );
}
