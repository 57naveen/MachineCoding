import React from "react";

const Interests = ({ data, setData }) => {
  const { interests } = data;

  const handelChangeData = (e) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i !== e.target.name),
    }));
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
            onChange={handelChangeData}
          />
          coding
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="music"
            checked={interests.includes("music")}
            onChange={handelChangeData}
          />
          music
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="javascript"
            checked={interests.includes("javascript")}
            onChange={handelChangeData}
          />
          javascript
        </label>
      </div>
    </div>
  );
};

export default Interests;
