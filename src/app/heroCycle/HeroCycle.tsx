"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import * as motion from "framer-motion/client";
type Props = {
  artList: string[];
  duration?: number;
};
export default function HeroCycle({ artList, duration }: Props) {
  let list = artList;
  let [images, setImages] = useState<any[]>([]);
  let [activeImage, setActiveImage] = useState(0);
  useEffect(() => {
    const cycleImage = () => {
      // let index = activeImage + 1;
      setActiveImage((ai) => ai + 1);
      console.log("adding", activeImage);
    };
    setInterval(cycleImage, duration ?? 5000);

    let imgList = artList.map((url) => {
      let img = new Image();
      img.src = url;
      let isWide = img.naturalWidth > 1000 ? "large" : "";
      return {
        image: img,
        isWide,
      };
    });
    setImages(imgList);
  }, []);

  return (
    <figure className="right">
      <AnimatePresence mode="wait">
        {/* <motion.img src={list[activeImage]} className="hero-art" /> */}
        {images.map((item, index: number) => {
          return activeImage % list.length === index ? (
            <motion.img
              // src={activeImage}
              src={item.image.src}
              key={"art-swing-" + index}
              className={"hero-art " + item.isWide}
              // animate={{}}
              initial={{
                x: -500,
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: 1000,
              }}
              transition={{
                ease: "easeOut",
                duration: 1,
              }}
            />
          ) : (
            <div key={"empty-" + index}></div>
          );
        })}
      </AnimatePresence>
    </figure>
  );
}
