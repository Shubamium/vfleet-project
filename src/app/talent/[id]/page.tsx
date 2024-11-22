import { cusUrlFor, fetchData, urlFor } from "@/db/client";
import "./talent.scss";

import TalentPreviewer from "./talentPreviewer/TalentPreviewer";
import { redirect } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = (await params).id;
  const data = await fetchData<any>(`
		*[_type == 'talents' && slug.current == '${id}']{
			name,
			title,
			art{
				list_background
			}
		}[0]
	`);
  let par = await parent;

  const previousImages = par.openGraph?.images || [];
  const banner =
    cusUrlFor(data.art.list_background)?.height(800).url() ?? "/empty";
  const title = data.name + " - " + data.title;

  return {
    title: title,
    description: par.description,
    openGraph: {
      title: title,
      images: [banner, ...previousImages],
      description: par.description ?? "",
    },
  };
}
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
  // console.log(data);
  return <TalentPreviewer t={data} />;
}
