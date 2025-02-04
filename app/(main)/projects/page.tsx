"use client";
import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
const ProjectPage = () => {
  const [duration, setDuration] = useState(0);
  const [start, setstart] = useState(false);
  const [word, setWord] = useState("");
  var regex = /^[A-Za-z0-9 ]+$/;
  useEffect(() => {
    if (start && duration > 0) {
      setTimeout(() => {
        console.log(duration);
        setDuration((prev) => prev - 1);
        console.log(duration);
      }, 1000);
    }
    if (duration === 0) {
      alert("Time's up");
    }
  }, [start, duration]);

  const CheckInput = (e: any) => {
    if (e.target.value.match(/^[a-zA-Z0-9]+$/)) {
      alert("A special character is entered");
    } else {
      if (word.length < 10) {
        setWord(e.target.value);
      }
    }
  };

  return (
    <div className="flex flex-col">
      <div className="text-3xl text-center">{duration}</div>
      <input
        className="m-auto"
        onChange={(e) => setDuration(e.target.value as any)}
        type="number"
        placeholder="input duration in seconds"
      />
      <button
        onClick={() => {
          setstart(true);
        }}
        className=" border border-2 bg-green-300 hover:bg-green-400 "
      >
        Start
      </button>
      <button
        onClick={() => {
          setstart(false);
        }}
        className="w=10 border border-2 bg-red-200 hover:bg-red-400"
      >
        {" "}
        Pause
      </button>

      <hr className="m-20" />

      <div>
        <button className={styles.circle}>Hello</button>
      </div>

      <hr className="mt-10" />

      <div className="">{word}</div>

      <input
        onChange={CheckInput}
        type="text"
        maxLength={10}
        placeholder="Enter an alphanumeric characters only"
      />
    </div>
  );
};

export default ProjectPage;
