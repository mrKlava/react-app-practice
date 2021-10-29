import React, { useState, useEffect } from "react";

import "./style/App.css"

import List from "./components/list";
// import ListItem from "./components/listitem";

import { dates } from "./data/data";



function App() {
 
  const item = dates

  const [total, setTotal] = useState('0')

  useEffect(
    function countTotal() {

      let node = document.querySelectorAll(".list-item--total")

      let arr = [];

      node.forEach(function(item) {
        arr.push(+item.innerHTML)
      })

      let total = arr.reduce( (a, b) => a + b, 0 )

      setTotal(total)
    }
  )

  return (
    <div className="App">

      <List item={item}/>

      <div>
        Total hours: {total}
      </div>

    </div>
  );
}

export default App;
