import React, { useState } from 'react'

const OtpInput = () => {

const OPT_Digit_count = 5;

const[inputs,setInputs]= useState(new Array(OPT_Digit_count).fill("1"));

  return (
    <div className='container'>
      
      <h1>Validate OTP</h1>
      {inputs.map((input,index)=>{
        return <input className='otp-input' key={index} type='text'/>
      })}

    </div>
  )
}

export default OtpInput