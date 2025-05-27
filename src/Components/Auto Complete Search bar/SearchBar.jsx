import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const [result, setResult] = useState([]);
  const [input, setInput] = useState("");
  const [showResult,setShowResult] = useState(false)
  const [cache,setCache] = useState({});

  const fetchRecipe = async () => {

    if(cache[input]){
      console.log("Cache Returned",input)
      setResult(cache[input]);
      return;
    }

  
    console.log("API CALL",input);
    const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
    const json = await data.json();
    setResult(json?.recipes);

    //Cache the search result 
    setCache((prev)=>({...prev,[input]:json?.recipes}))
  };

  useEffect(() => {

    //Debouning 
    const  timer = setTimeout(fetchRecipe,300)

    return () =>{
      clearTimeout(timer)
    }
   
  }, [input]);

  return (
    <div>
      <div className="heading">
        <h1>Google</h1>
      </div>
      <input
        className="input-box"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        onFocus={()=>setShowResult(true)}
        onBlur={()=>setShowResult(false)}
      />
      { showResult && (
        <div className="result-container">
          {result.map((search) => (
            <div className="list" key={search.id}>
              <p>{search.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
