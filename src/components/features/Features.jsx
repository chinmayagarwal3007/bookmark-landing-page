'use client'
import React, { useState } from "react";

import styles from "./features.module.css";
import Image from "next/image";

const Features = () => {
  const [borderBottom1, setBorderBottom1] = useState("1px solid hsl(0, 0%, 90%)");
  const [borderBottom2, setBorderBottom2] = useState("1px solid hsl(0, 0%, 90%)");
  const [borderBottom3, setBorderBottom3] = useState("1px solid hsl(0, 0%, 90%)");

  const handleClick1 = () => {
    setBorderBottom1("4px solid hsl(0, 94%, 66%)");
    setBorderBottom2("1px solid hsl(0, 0%, 90%)");
    setBorderBottom3("1px solid hsl(0, 0%, 90%)");
  }
  const handleClick2 = () => {
    setBorderBottom2("4px solid hsl(0, 94%, 66%)");
    setBorderBottom1("1px solid hsl(0, 0%, 90%)");
    setBorderBottom3("1px solid hsl(0, 0%, 90%)");
  }
  const handleClick3 = () => {
    setBorderBottom3("4px solid hsl(0, 94%, 66%)");
    setBorderBottom1("1px solid hsl(0, 0%, 90%)");
    setBorderBottom2("1px solid hsl(0, 0%, 90%)");
  }

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
        <p style={{ borderBottom: borderBottom1}} onClick={handleClick1}>Simple Bookmarking</p>
        <p style={{ borderBottom: borderBottom2}} onClick={handleClick2}> Speedy Searching</p>
        <p style={{ borderBottom: borderBottom3}} onClick={handleClick3}>Easy Sharing</p>
      </div>

      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            src="/illustration-hero.png"
            alt="img"
            width={657}
            height={466}
            className={styles.img}
          />
          <div className={styles.block}></div>
        </div>

        <div className={styles.info}>
          <h1 className={styles.heading}>Bookmark in one click</h1>
          <p className={styles.content}>
          Organize your bookmarks however you like. Our simple drag-and-drop interface 
  gives you complete control over how you manage your favourite sites.
          </p>
          <div className={styles.buttons}>
            <button className={styles.chrome}>More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
