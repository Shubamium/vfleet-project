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

  const generalData = await fetchData<any>(`
		*[_type == 'general' && preset == 'main']{
			news_text
		}[0]
	`);
  const t = generalData.news_text;
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
        <p className="common-p">{t.n1}</p>
      </section>

      <NewsList list={allNews} categories={allCategory} />
    </main>
  );
}
