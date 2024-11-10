import { fetchData } from "@/db/client";
import "./talents.scss";
import TalentSelection from "./talentSelection/TalentSelection";
export default async function TalentPage() {
  const talentGroup = await fetchData<any[]>(`
		*[_type == 'talent_group'] | order(_createdAt asc){
			name,
			disabled,
			talents[]->{
				name,
				title,
				'slug':  slug.current,
				art{
					list,
					list_background,
					logo,
					icon,
					background,
				}				
			} 
		}
	`);
  const map = new Map(talentGroup.map((group) => [group.name, group]));
  // console.log(map);
  return (
    <main id="page_talents">
      <TalentSelection data={map} />
    </main>
  );
}
