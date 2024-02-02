"use client";
import React from "react";
import styles from "./newsLetter.module.css";
import Image from "next/image";

import { useState } from "react";

const NewsLetter = () => {
  const [inputValue, setInputValue] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    validateEmail(value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsValidEmail(isValid);
  };

  return (
    <div className={styles.container}>
      <p>35,000+ already joined</p>
      <h1>Stay up-to-date with what we're doing</h1>

      <div className={styles.box}>
        <div
          style={{
            backgroundColor: isValidEmail
              ? "hsl(231, 69%, 60%)"
              : "hsl(0, 94%, 66%)",
          }}
          className={styles.inputBoxContainer}
        >
          <div className={styles.combine}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              className={styles.inputBox}
              style={{borderRadius: isValidEmail ? "5px" : "5px 0px 0px 5px"}}
            />
            {!isValidEmail && (
              <div className={styles.img}>
                <Image
                  src="/icon-error.png"
                  alt="error"
                  height={20}
                  width={20}
                />
              </div>
            )}
          </div>
          {!isValidEmail && (
            <p style={{ color: "white" }} className={styles.warning}>
              Whoops, make sure it's an email !!
            </p>
          )}
        </div>

        <button className={styles.btn}>Contact Us</button>
      </div>
    </div>
  );
};

export default NewsLetter;
