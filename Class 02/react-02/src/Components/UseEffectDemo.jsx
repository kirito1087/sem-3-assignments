import React, { useEffect, useState } from "react";
const UseEffectDemo = () => {
  // 1. state to hold the API data (starts empty)
  let [apiData, setApiData] = useState([]);
  console.log(apiData, "apiData"); // logs on every render
  // 2. run the API call ONCE when the page loads
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.json(); // convert response to JSON
      })
      .then((data) => {
        console.log(data); // check data in console
        setApiData(data); // store data in state -> re-render
      });
  }, []); // empty array = run once
  // 3. display the data on screen
  return (
    <div>
      {apiData.map((a) => {
        return (
          <>
            <h2>{a.id}</h2>
            <h4>{a.title}</h4>
          </>
        );
      })}
    </div>
  );
};
export default UseEffectDemo;
