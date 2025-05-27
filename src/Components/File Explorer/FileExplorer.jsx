import React, { Children, useState } from "react";
import json from "../../data.json";


//Render List of objects
const List = ({ list,addNodeToList  }) => {
  const [isExpand, setIsExpand] = useState({});

  const handleClick = (name) => {
    setIsExpand((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className="Explorer_container">
      {list.map((node) => (
        <div key={node.id}>
         
          {node.isfolder && (
            <span
              onClick={() => handleClick(node.name)}
              style={{ cursor: "pointer" }}
            >
              {isExpand?.[node.name] ? "➖" : "🔻"}
            </span>
          )}
           <span>{node.name}</span>

{ node?.isfolder &&  <span onClick={() => addNodeToList(node.id)} className="icon-folder" ><img className="icon"  alt="folder-icon" src="/images/add-folder.png"/></span>}

         {isExpand?.[node.name] && node?.children && (
  <List list={node.children} addNodeToList={addNodeToList} />
)}
        </div>
      ))}
    </div>
  );
};


const FileExplorer = () => {
  const [data, setData] = useState(json);

  const addNodeToList = (parentId) =>{

    const name = prompt("Enter name");

    const updateTree = (list) =>{

      return list.map((node)=>{
        if(node.id === parentId){
          return {
            ...node,
            children:[

              ...node?.children,
              {id:"123",name:name,isfolder:true,children:[]}
            ],

            
          }
        }

        if(node.children){
          return {...node,children:updateTree(node.children)};
        }
        return node;

      })

    }


    setData((prev)=>updateTree(prev))

  }


  return (
    <div>
      <h1>File/Folder Explorer</h1>
      <List list={data} addNodeToList={addNodeToList} />
    </div>
  );
};

export default FileExplorer;
