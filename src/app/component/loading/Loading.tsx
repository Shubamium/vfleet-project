"use client";
import { useAnimate } from "framer-motion";
import "./loading.scss";
import { useEffect, useState } from "react";
export default function Loading() {
  const [scope, animate] = useAnimate();
  let [visible, setVisible] = useState(true);
  useEffect(() => {
    // animateLoading();
    setTimeout(() => {
      animate(".logo-part", { opacity: 0 }, { duration: 1.2 });

      animatePlane();
    }, 3000);
  }, []);
  const animatePlane = async () => {
    animate(
      ".left-block",
      {
        // right: "0%",
        left: "20%",
      },
      {
        duration: 1.2,
        ease: "circIn",
      }
    );
    await animate(
      ".right-block",
      {
        left: "-20%",
      },
      {
        duration: 1.2,
        ease: "circIn",
      }
    );
    await animate(
      scope.current,
      {
        opacity: 0,
      },
      {
        duration: 1,
        delay: 0.5,
        ease: "easeOut",
      }
    );

    setVisible(false);
  };
  return visible ? (
    <div id="main-loading" ref={scope}>
      <div className="hexalay"></div>
      <div className="logo-part dw">
        <img src="/gfx/loading-logo.png" alt="" className="logo" />
        <p className="common-h s load-text"> LOADING . . .</p>
      </div>
      <div className="plane-part dw">
        <div className="right-block">
          <img src="/gfx/loading-gold.png" alt="" />
        </div>
        <div className="left-block">
          <img src="/gfx/loading-blue.png" alt="" />
        </div>
      </div>
    </div>
  ) : null;
}
