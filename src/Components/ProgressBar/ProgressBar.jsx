import React, { useEffect, useState } from "react";

const ProgressBar = ({ progress }) => {


  const [animateProgress,setAnimateProgress] = useState(0)

  useEffect(()=>{

    setTimeout(()=>{
      setAnimateProgress(progress)
    },100)

  },[progress])

  return (
    <div>
      <h1>Progress Bar</h1>
      <div className="outer">
        <div
          className="inner"
          style={{
            transform:`translateX(${animateProgress - 100}%)`,
            color: animateProgress < 5 ? "black" : "white",
          }}
          role="progressbar"
          aria-valuemax="100"
          aria-valuenow={animateProgress}
          aria-valuemin="0"
        >
          {animateProgress}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
