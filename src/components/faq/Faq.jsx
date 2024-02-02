'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from "./faq.module.css";

const Faq = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    <div className={styles.container}>
      
      <div className={styles.intro}>
        <h2>Frequently Asked Questions</h2>
        <p>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
      </div>

      <div className={styles.box}>
        <hr className={styles.line} />
        <div className={styles.heading}>
          <h3 onClick={() => setOpen1(!open1)}>
            What is Bookmark?
          </h3>
          <Image
            className={styles.arrow}
            src="/icon-arrow-down.png"
            alt="down-arrow"
            height={12}
            width={18}
            style={{
              transform: open1 ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
            onClick={() => setOpen1(!open1)}
          />
        </div>

        {open1 && (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </p>
        )}
        <hr className={styles.line} />
      </div>

      <div className={styles.box}>
        <div className={styles.heading}>
          <h3 onClick={() => setOpen2(!open2)}>How can I request a new browser?</h3>
          <Image
            className={styles.arrow}
            src="/icon-arrow-down.png"
            alt="down-arrow"
            height={12}
            width={18}
            style={{
              transform: open2 ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
            onClick={() => setOpen2(!open2)}
          />
        </div>
        {open2 && (
          <p>
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue
            massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus
            eros aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </p>
        )}
        <hr className={styles.line} />
      </div>

      <div className={styles.box}>
        <div className={styles.heading}>
          <h3 onClick={() => setOpen3(!open3)}>Is there a mobile app?</h3>
          <Image
            className={styles.arrow}
            src="/icon-arrow-down.png"
            alt="down-arrow"
            height={12}
            width={18}
            style={{
              transform: open3 ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
            onClick={() => setOpen3(!open3)}
          />
        </div>
        {open3 && (
          <p>
            Sed consectetur quam id neque fermentum accumsan. Praesent luctus
            vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
            quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin
            ex et ultricies bibendum.
          </p>
        )}
        <hr className={styles.line} />
      </div>

      <div className={styles.box}>
        <div className={styles.heading}>
          <h3 onClick={() => setOpen4(!open4)}>What about other Chromium browsers?</h3>
          <Image
            className={styles.arrow}
            src="/icon-arrow-down.png"
            alt="down-arrow"
            height={12}
            width={18}
            style={{
              transform: open4 ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
            onClick={() => setOpen4(!open4)}
          />
        </div>
        {open4 && (
          <p>
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
            mi, at euismod dui. Aliquam vitae neque eget nisl gravida
            pellentesque non ut velit.
          </p>
        )}
        <hr className={styles.line} />
      </div>

      <button className={styles.btn}>More info</button>
    </div>
  );
};

export default Faq;
