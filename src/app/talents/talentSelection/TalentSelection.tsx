"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type TalentCardData = {
  main_art: string;
};
let placeholder: TalentCardData[] = [
  {
    main_art: "/gfx/talent-card-art.png",
  },
  {
    main_art: "/gfx/talent-card-art2.png",
  },
  {
    main_art: "/gfx/talent-card-art.png",
  },
  {
    main_art: "/gfx/talent-card-art.png",
  },
  {
    main_art: "/gfx/talent-card-art.png",
  },
  {
    main_art: "/gfx/talent-card-art2.png",
  },
  {
    main_art: "/gfx/talent-card-art2.png",
  },
  {
    main_art: "/gfx/talent-card-art2.png",
  },
  {
    main_art: "/gfx/talent-card-art2.png",
  },
  {
    main_art: "/gfx/talent-card-art2.png",
  },
  {
    main_art: "/gfx/talent-card-art2.png",
  },

  {
    main_art: "/gfx/talent-card-art.png",
  },
  {
    main_art: "/gfx/talent-card-art.png",
  },
];
let main: TalentCardData[] = [
  {
    main_art: "/gfx/talent-card-art.png",
  },
  {
    main_art: "/gfx/talent-card-art.png",
  },
];

let classList = ["a", "b", "c", "active d", "e", "f"];

type TalentProp = {
  position: number;
  talentData: TalentCardData;
};
const TalentCard = ({ position, talentData }: TalentProp) => {
  // let talentData = talend;
  return (
    <Link
      href={"/talent/talent-name"}
      className={`talent-card ${classList[position] ?? "hidden"} `}
    >
      <img src="/bg/card-background.png" alt="" className="card-bg" />
      <img src="/bg/white-texture.png" alt="" className="card-bg texture" />
      <img src={talentData.main_art} alt="" className="talent-art" />

      <div className="data">
        <p className="talent">Talent Name Here</p>
        <p className="talent-title">U.S.S LEXINGTON</p>
        <div className="arrow"></div>
        <p className="note">
          click for more info <FaArrowRight />
        </p>
        <div className="backarrow"></div>
      </div>
    </Link>
  );
};

const genList = ["GEN 1", "PILOTS", "GEN 2", "FORTIS", "GEN 3"];

export default function TalentSelection() {
  let talentData = main;

  const [positionList, setPositionList] = useState<number[]>([]);
  const [toRender, setToRender] = useState<TalentCardData[]>([]);

  // Debouncer
  const [debouncer, setdebouncer] = useState(false);

  const runDebounce = () => {
    setdebouncer(true);
    setTimeout(() => {
      setdebouncer(false);
    }, 400);
  };

  const prev = () => {
    shiftPosition("prev");
    runDebounce();
  };

  const next = () => {
    shiftPosition("next");
    runDebounce();
  };

  const shiftPosition = (dir: "next" | "prev") => {
    let shifted = [...positionList];
    const head = shifted.shift() ?? 0;
    const tail = shifted.pop() ?? 0;
    if (dir === "next") {
      shifted.unshift(head);
      shifted.unshift(tail);
    }
    if (dir === "prev") {
      shifted.push(tail);
      shifted.push(head);
    }
    setPositionList([...shifted]);
  };

  let fillToFit = (origin: TalentCardData[]) => {
    let minimum = 10;
    let target = [...origin];
    while (target.length < minimum) {
      target.push(...origin);
    }
    return target;
  };

  useEffect(() => {
    let fitted = fillToFit(main);
    setToRender(fitted);
    setPositionList(fitted.map((_, i) => i));
  }, []);

  return (
    <>
      <div className="fullscreen-bg">
        <div className="left"></div>
        <div className="right">
          <img
            src="/gfx/talent-background-sample-art.png"
            alt=""
            className="talent"
          />
        </div>
      </div>
      <section id="talent-heading" className="confine">
        <p className="common-sh">VFLEET</p>
        <h2 className="common-h">TALENTS</h2>
        <div className="line"></div>
      </section>
      <section id="talent-list" className="confine">
        {toRender.map((data, index) => {
          return (
            <TalentCard
              position={positionList[index]}
              talentData={data}
              key={"card-el" + index}
            />
          );
        })}
      </section>
      <section id="generation-select" className="confine">
        <h2 className="common-h s">GENERATION</h2>
        <div className="gen-list">
          <button className="btn-gen selected">GEN 1</button>
          <button className="btn-gen">PILOTS</button>
          <button className="btn-gen">GEN 2</button>
          <button className="btn-gen">FORTIS</button>
          <button className="btn-gen disabled">GEN 3</button>
        </div>
      </section>
      <section id="talent-control">
        <button className="btn btn-special" disabled={debouncer} onClick={prev}>
          <FaArrowLeft />
        </button>
        <button className="btn btn-special" disabled={debouncer} onClick={next}>
          <FaArrowRight />
        </button>
      </section>
    </>
  );
}
