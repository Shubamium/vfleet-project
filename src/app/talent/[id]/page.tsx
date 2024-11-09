import { fetchData } from "@/db/client";
import "./talent.scss";

import TalentPreviewer from "./talentPreviewer/TalentPreviewer";
import { redirect } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};
export default async function TalentPage({ params }: Props) {
  const id = (await params).id;
  const data = await fetchData<any>(`
		*[_type == 'talents' && slug.current == '${id}']{
			...,
			art{
				detail_main,
				detail_full,
				detail_small,
				background,
				logo,
				icon,
			}
		}[0]
	`);

  if (!data) redirect("/talents");
  console.log(data);
  return <TalentPreviewer t={data} />;
}
