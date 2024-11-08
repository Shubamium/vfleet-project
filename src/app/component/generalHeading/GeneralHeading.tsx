import "./generalHeading.scss";
type Props = {
  sub?: string;
  h?: string;
  d?: string;
};
export default function GeneralHeading({ sub, h, d }: Props) {
  return (
    <div className="general-heading">
      <div className="vertical-line"></div>
      <img src="/gfx/icon_black.png" alt="" className="icon" />
      <p className="common-sh">{sub ?? "SUB HEADING"}</p>
      <h2 className="common-h">{h ?? "MAIN HEADING"}</h2>
      <p className="common-p">
        {d ??
          `VFleet is a Vtuber Company that prioritizes the needs of talents as well
        as works towards spreading awareness, engagement, and connection with
        Naval Museums around the world.`}
      </p>
    </div>
  );
}