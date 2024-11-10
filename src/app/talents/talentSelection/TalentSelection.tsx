"use client";

import { cusUrlFor, urlFor } from "@/db/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import * as motion from "framer-motion/client";
import { AnimatePresence } from "framer-motion";
type TalentCardData = {
  name: string;
  title: string;
  art: {
    icon?: string;
    list?: string;
    list_background?: string;
    logo?: string;
    background?: string;
  };
  slug: string;
};

// let placeholder: TalentCardData[] = [
//   {
//     main_art: "/gfx/talent-card-art.png",
//   },
//   {
//     main_art: "/gfx/talent-card-art2.png",
//   },
//   {
//     main_art: "/gfx/talent-card-art.png",
//   },
//   {
//     main_art: "/gfx/talent-card-art.png",
//   },
//   {
//     main_art: "/gfx/talent-card-art.png",
//   },
//   {
//     main_art: "/gfx/talent-card-art2.png",
//   },
//   {
//     main_art: "/gfx/talent-card-art2.png",
//   },
//   {
//     main_art: "/gfx/talent-card-art2.png",
//   },
//   {
//     main_art: "/gfx/talent-card-art2.png",
//   },
//   {
//     main_art: "/gfx/talent-card-art2.png",
//   },
//   {
//     main_art: "/gfx/talent-card-art2.png",
//   },

//   {
//     main_art: "/gfx/talent-card-art.png",
//   },
//   {
//     main_art: "/gfx/talent-card-art.png",
//   },
// ];
// let main: TalentCardData[] = [
//   {
//     main_art: "/gfx/talent-card-art.png",
//   },
//   {
//     main_art: "/gfx/talent-card-art.png",
//   },
// ];

let classList = ["a", "b", "c", "active d", "e", "f"];

type TalentProp = {
  position: number;
  talentData: TalentCardData;
};
const TalentCard = ({ position, talentData }: TalentProp) => {
  // let talentData = talend;

  return (
    <Link
      href={`/talent/${talentData.slug}`}
      className={`talent-card ${classList[position] ?? "hidden"} `}
    >
      <img
        src={talentData.art.list_background ?? "/bg/card-background.png"}
        alt=""
        className="card-bg"
      />
      <img src="/bg/white-texture.png" alt="" className="card-bg texture" />
      <img src={talentData.art.list} alt="" className="talent-art" />
      <img src={talentData.art.icon} className="icon" />
      <img src={talentData.art.logo} className="logo" />
      <div className="arrow l"></div>
      <div className="arrow r"></div>
      <div className="data">
        <p className="talent">{talentData.name}</p>
        <p className="talent-title">{talentData.title}</p>
        <div className="arrow"></div>
        <p className="note">
          click for more info <FaArrowRight />
        </p>
        <div className="backarrow"></div>
      </div>
    </Link>
  );
};

// const genList = ["GEN 1", "PILOTS", "GEN 2", "FORTIS", "GEN 3"];

type Props = {
  data: Map<string, any>;
};
export default function TalentSelection({ data }: Props) {
  let genList: string[] = Array.from(data.entries()).map((val) => val[0]);

  const [positionList, setPositionList] = useState<number[]>([]);
  const [toRender, setToRender] = useState<TalentCardData[]>([]);
  const [activeCat, setActiveCat] = useState<string>(genList[0]);

  const [activeTalent, setActiveTalent] = useState<{
    bg?: string;
    name: string;
    title: string;
  }>({
    name: "",
    title: "",
  });

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

    reselectBackgroundTalent([...shifted]);
  };

  let fillToFit = (origin: TalentCardData[]) => {
    if (origin.length === 0) return [];
    let minimum = 5;
    let target = [...origin];
    while (target.length < minimum) {
      target.push(...origin);
    }
    let fixed = target.map((tar) => {
      return {
        ...tar,
        art: {
          icon: cusUrlFor(tar.art.icon)?.width(200).url(),
          logo: cusUrlFor(tar.art.logo)?.width(200).url(),
          list: cusUrlFor(tar.art.list)?.fit("scale").width(700).url(),
          list_background: cusUrlFor(tar.art.list_background)?.width(720).url(),
          background: cusUrlFor(tar.art.background)
            ?.auto("format")
            .width(1080)
            .saturation(-100)
            .url(),
        },
      };
    });
    return fixed;
  };

  useEffect(() => {
    let talentData = data.get(activeCat).talents ?? [];
    let fitted = fillToFit(talentData);
    setToRender(fitted);
    setPositionList(fitted.map((_, i) => i));
  }, [data, activeCat]);

  const reselectBackgroundTalent = (pos: number[]) => {
    let target = pos.findIndex((n) => n === 3);

    if (target !== -1) {
      // let bg = urlFor(toRender[target].art.background).url();
      let p = toRender[target % toRender.length];
      console.log("found index ", target, pos, p);

      if (p) {
        setActiveTalent({
          bg: p.art.background,
          name: p.name,
          title: p.title,
        });
      }
    }
  };

  // useEffect(() => {}, [positionList]);

  return (
    <>
      <div className="fullscreen-bg">
        <div className="left">
          <p className="name dw">{activeTalent.name}</p>
          <div className="scroll-text dw"></div>
        </div>
        <div className="right">
          <div className="hexa"></div>
          <AnimatePresence>
            <p className="title dw"> {activeTalent.title}</p>

            <motion.img
              src={activeTalent.bg ?? "/gfx/talent-background-sample-art.png"}
              alt=""
              initial={{
                opacity: 0,
                y: "-100vh",
              }}
              animate={{
                opacity: 0.1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: "100vh",
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              key={"bg-image-" + activeTalent.bg}
              className="talent"
            />
          </AnimatePresence>
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
          {/* <button className="btn-gen selected">GEN 1</button> */}
          {genList.map((gen) => {
            const isDisabled = data.get(gen).disabled;
            return (
              <button
                className={`btn-gen ${isDisabled ? "disabled" : ""} ${
                  activeCat === gen ? "selected" : ""
                }`}
                key={"btn-gen-" + gen}
                disabled={isDisabled}
                onClick={() => {
                  setActiveCat(gen);
                }}
              >
                {gen}
              </button>
            );
          })}
          {/* <button className="btn-gen">GEN 2</button>
          <button className="btn-gen">FORTIS</button>
          <button className="btn-gen disabled">GEN 3</button> */}
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
