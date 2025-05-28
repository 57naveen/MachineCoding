import React, { Component, useState } from "react";
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./settings";

const TabForm = () => {

  const [activeTab, setActiveTab] = useState(0)

  const [data ,setData] = useState({
    name : "naveen",
    age: "24",
    email:"naveenkishore32@gmail.com",
    interests:["coding","music"],
    theme:"dark",
  })


  // Config driven UI
  const tabs = [
    {
      name: "Profile",
      Component: Profile,
    },
    {
      name: "Interests",
      Component: Interests,
    },
    {
      name: "Settings",
      Component: Settings,
    },
  ];

  const handleNextClick =  () =>{

    setActiveTab((prev) => prev + 1)

  }

  const handlePrevClick =() => {
     setActiveTab((prev) => prev - 1)
  }

  const handleSumbitClick= () =>{

    //make an APi call id needed

    console.log(data);

  }

  const ActiveTabComponents = tabs[activeTab].Component

  return (
    <div>
      <div className="tab-container">
        {tabs.map((tab,index) => (
          <div key={tab.name} onClick={()=> setActiveTab(index)} className={"tab-name " + (activeTab === index ? "active-button" : "")}>
            {tab.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponents data={data} setData={setData}/>
      </div>

      <div>
        {activeTab > 0 && <button onClick={handlePrevClick}>Prev</button> }
        {activeTab < tabs.length -1 &&  <button onClick={handleNextClick}>Next</button> }
        {activeTab === tabs.length -1 && <button onClick={handleSumbitClick}>Submit</button> }
       
        
      </div>
       
    </div>
  );
};

export default TabForm;
