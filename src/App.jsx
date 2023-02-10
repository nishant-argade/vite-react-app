import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const ArrofObj = [
    { name: "nishant", age: 20, Gender: "male" },
    { name: "aniket", age: 21, Gender: "male" },
    { name: "sakshi", age: 22, Gender: "Female" },
    { name: "Omkar", age: 20, Gender: "male" },
    { name: "Ashiwa", age: 24, Gender: "Female" },
    { name: "Ritu", age: 21, Gender: "Female" },
    { name: "SaNket", age: 22, Gender: "male" },
  ];

  const temp = ArrofObj.filter((item) => item.name.toLowerCase().includes("n"));
  console.log(temp);

  return (
    <div>
      {/* {ArrofObj.map((item, index) => {
        return (
          <div style={{ color: "red", margin: "2rem" }}>
            <div>name: {item.name}</div>
            <div>age: {item.age}</div>
            <div>Gender: {item.Gender}</div>
          </div>
        );
      })} */}
      {/* {ArrofObj.filter((item, index) => item.age === 22).map((item, index) => (
        <div style={{ color: "red", margin: "2rem" }}>
          <div>name: {item.name}</div>
          <div>age: {item.age}</div>
          <div>Gender: {item.Gender}</div>
        </div>  
      ))} */}
      hello
    </div>
  );
}

export default App;
