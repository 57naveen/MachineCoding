import React, { useEffect, useRef, useState } from "react";

const OtpInput = () => {
  const OPT_Digit_count = 5;

 const refArr =  useRef([]);

 //This useEffect is used to focus on first box initialy
 useEffect(()=>{
    refArr.current[0]?.focus();
 },[])


  const [inputArr, setInputArr] = useState(new Array(OPT_Digit_count).fill(""));
  //["", "", "", "", ""] new array with value empty


  const handelOnChange = (value,index)=>{

    //ignore the alphabet only number allowed
    if(isNaN(value)) return;

    console.log(value);

    const newValue = value.trim();

    //copy the existing inputArr and set to newArr
    const newArr = [...inputArr];

    //set the value to the newArr
    newArr[index] = newValue.slice(-1); //using slice to get the single entry in the input box 
    
    //set the newArr to the existing main array
    setInputArr(newArr)

    //If value is there the only  focus on next box after value entered
    newValue && refArr.current[index + 1]?.focus();

  }

  const handelOnKeyDown = (e,index)=>{

    
    if(!e.target.value && e.key === "Backspace"){

      //focus on previous box 
      refArr.current[index - 1]?.focus();
    }

  }

  return (
    <div className="container">
      <h1>Validate OTP</h1>
      {inputArr.map((input, index) => {
        return (
          <input
            className="otp-input"
            key={index}
            type="text"
            value={inputArr[index]}
            onChange={(e)=>handelOnChange(e.target.value,index)}
            ref={(input)=>(refArr.current[index] = input)}
            onKeyDown={(e) => handelOnKeyDown(e,index)}
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
