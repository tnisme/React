import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import List from "./component/List";
import Button from "./component/Button";

function App() {
  const persons = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 40 },
    { name: "Alice", age: 35 },
  ];
  const pets = [
    { name: "cat", age: 1 },
    { name: "dog", age: 2 },
    { name: "fish", age: 1 },
    { name: "hog", age: 3 },
  ];

  const [data, setData] = useState(persons);

  function changeData() {
    console.log(data);
    if (data == persons) {
      setData(pets);
    }
    if (data == pets) {
      setData(persons);
    }
  }

  return (
    <>
      <List data={data} />
      <button onClick={changeData}>Change data</button>
    </>
  );
}

export default App;
