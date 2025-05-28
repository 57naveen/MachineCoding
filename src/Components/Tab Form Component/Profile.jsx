import React from 'react'

const Profile = ({data,setData}) => {


  const handelInputChange = (e,item) =>{

    //copying the previous data and setting the value dynamicaly 
    setData((prev) => ({
      ...prev, 
      [item] : e.target.value
    }))

  }

  return (
    <div>
      <div>
          <label>Name : </label> 
          <input  type='text' onChange={(e)=>handelInputChange(e,"name")} value={data.name}/> 
          <label>age : </label> 
          <input  type='number' onChange={(e)=>handelInputChange(e,"age")} value={data.age}/> 
          <label>email : </label> 
          <input  type='email' onChange={(e)=>handelInputChange(e,"email")} value={data.email}/> 
      </div>
    </div>
  )
}

export default Profile