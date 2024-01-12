"use client";
import React, { useState } from "react";

import styles from "./features.module.css";
import Image from "next/image";

const Features = () => {
  const [borderBottom1, setBorderBottom1] = useState(
    "4px solid hsl(0, 94%, 66%)"
  );
  const [borderBottom2, setBorderBottom2] = useState(
    "1px solid hsl(0, 0%, 90%)"
  );
  const [borderBottom3, setBorderBottom3] = useState(
    "1px solid hsl(0, 0%, 90%)"
  );
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleClick1 = () => {
    setOpen1(true);
    setOpen2(false);
    setOpen3(false);
    setBorderBottom1("4px solid hsl(0, 94%, 66%)");
    setBorderBottom2("1px solid hsl(0, 0%, 90%)");
    setBorderBottom3("1px solid hsl(0, 0%, 90%)");
  };
  const handleClick2 = () => {
    setOpen2(true);
    setOpen1(false);
    setOpen3(false);
    setBorderBottom2("4px solid hsl(0, 94%, 66%)");
    setBorderBottom1("1px solid hsl(0, 0%, 90%)");
    setBorderBottom3("1px solid hsl(0, 0%, 90%)");
  };
  const handleClick3 = () => {
    setOpen3(true);
    setOpen2(false);
    setOpen1(false);
    setBorderBottom3("4px solid hsl(0, 94%, 66%)");
    setBorderBottom1("1px solid hsl(0, 0%, 90%)");
    setBorderBottom2("1px solid hsl(0, 0%, 90%)");
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.intro}>
        <h1>Features</h1>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      <div className={styles.links}>
        <p style={{ borderBottom: borderBottom1 }} onClick={handleClick1}>
          Simple Bookmarking
        </p>
        <p style={{ borderBottom: borderBottom2 }} onClick={handleClick2}>
          {" "}
          Speedy Searching
        </p>
        <p style={{ borderBottom: borderBottom3 }} onClick={handleClick3}>
          Easy Sharing
        </p>
      </div>

      {open1 && (
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              src="/illustration-features-tab-1.png"
              alt="img"
              width={536}
              height={346}
              className={styles.img}
            />
            <div className={styles.block}></div>
          </div>

          <div className={styles.info}>
            <h1 className={styles.heading}>Bookmark in one click</h1>
            <p className={styles.content}>
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
            <div className={styles.buttons}>
              <button className={styles.chrome}>More Info</button>
            </div>
          </div>
        </div>
      )}

      {open2 && (
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              src="/illustration-features-tab-2.png"
              alt="img"
              width={478}
              height={416}
              className={styles.img}
            />
            <div className={styles.block}></div>
          </div>

          <div className={styles.info}>
            <h1 className={styles.heading}>Intelligent search</h1>
            <p className={styles.content}>
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.
            </p>
            <div className={styles.buttons}>
              <button className={styles.chrome}>More Info</button>
            </div>
          </div>
        </div>
      )}

      {open3 && (
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              src="/illustration-features-tab-3.png"
              alt="img"
              width={440}
              height={380}
              className={styles.img}
            />
            <div className={styles.block}></div>
          </div>

          <div className={styles.info}>
            <h1 className={styles.heading}>Share your bookmarks</h1>
            <p className={styles.content}>
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
            </p>
            <div className={styles.buttons}>
              <button className={styles.chrome}>More Info</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Features;
