import { useState } from "react";
// import "./styles.css";
// import "../src/test.scss";

export default function Test2() {
  const [addcircul, setAddcircul] = useState([{}]);
  const [count, setCount] = useState(0);
  const Newcircul = () => {
    setAddcircul([...addcircul, {}]);
  };
  console.log(addcircul)
  const chnageColor = (index) => {
    setAddcircul(
      addcircul.map((intem, innerIndex) => {
        if (innerIndex === index) {
          if (intem.color === "gray") {
            setCount(count - 1);
            return { color: "" };
          } else {
            setCount(count + 1);
            return { color: "gray" };
          }
        } else return { ...intem };
      })
    );
  };
  console.log(addcircul);
  return (
    <div className="App">
      <button onClick={() => Newcircul()}>Add Circul</button>
      <p>Num of count = {count}</p>

      {addcircul.map((item, index) => (
        <div
          className="circul"
          style={{ backgroundColor: item.color && "gray" }}
          onClick={() => chnageColor(index)}
        ></div>
      ))}
    </div>
  );
}
