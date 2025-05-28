import React from 'react'

const settings = ({data,setData}) => {
  const {theme} = data


  const handelDataChange = (e) =>{
      setData((prevState) =>({
        ...prevState, theme:e.target.name
      }))
  }

  return (
    <div>

      <div>
        <label>
          <input type='radio' name='dark' checked={theme.includes("dark")} onChange={handelDataChange} />
          Dark
        </label>
      </div>

      <div>
        <label>
          <input type='radio' name='light' checked={theme.includes("light")} onChange={handelDataChange}/>
          Light
        </label>
      </div>

    </div>
  )
}

export default settings