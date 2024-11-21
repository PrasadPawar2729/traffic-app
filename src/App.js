
import './App.css';
import './Style/Traffic.css'
import React, { useState, useEffect } from "react";


function App() {
  const [light, setLight] = useState("green"); 

  useEffect(() => {
    let timer;

 
    const changeLight = () => {
      switch (light) {
        case "green":
          timer = setTimeout(() => setLight("yellow"), 3000); 
          break;
        case "yellow":
          timer = setTimeout(() => setLight("red"), 2000); 
          break;
        case "red":
          timer = setTimeout(() => setLight("yellow"), 5000); 
          break;
        default:
          timer = setTimeout(() => setLight("green"), 2000); 
          break;
      }
    };

    changeLight();

    return () => clearTimeout(timer); 
  }, [light]);

  return (
    <div className="traffic-light">
      <div className={`bulb ${light === "green" ? "green" : ""}`}></div>
      <div className={`bulb ${light === "yellow" ? "yellow" : ""}`}></div>
      <div className={`bulb ${light === "red" ? "red" : ""}`}></div>
    </div>
  );
}

export default App;
