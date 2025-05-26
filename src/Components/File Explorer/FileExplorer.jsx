import React, { useState } from "react";
import json from "../../data.json";


//Render List of objects
const List = ({ list }) => {

 

  const [isExpand, setIsExpand] = useState({})

   const handleClick = () =>{

    setIsExpand((prev)=>(
      {
        ...prev,[node.name] : !prev[node.name],
      }
    ))
  }
  return (
    <div className="Explorer_container">
      {list.map((node) => (
        <div key={node.id}>
          <span>{node.name}</span>
          {node.isfolder && <span onClick={handleClick}  style={{cursor:"pointer"}}> {isExpand?.[node.name] ? "➖":"🔻"}  </span>}
          {isExpand?.[node.name] && node?.Children && <List list={node.Children} />} 
        </div>
      ))}
    </div>
  );
};

const FileExplorer = () => {
  const [data, setData] = useState(json);

  return (
    <div>
      <h1>File/Folder Explorer</h1>
      <List list={data} />
    </div>
  );
};

export default FileExplorer;
