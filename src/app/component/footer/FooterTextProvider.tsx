import { fetchData } from "@/db/client";
import Footer from "./Footer";

export default async function FooterTextProvider() {
  const generalData = await fetchData<any>(`
		*[_type == 'general' && preset == 'main']{
			footer_text,
	}[0]
	`);
  const t = generalData.footer_text;
  return <Footer l={t.left} r={t.right} />;
}
