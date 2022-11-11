import React from "react";
import Counter from "./Components/Counter";
import "./App.css";
import Products from "./Components/Products";
import Users from "./Components/Users";

const App = () => {
  return (
    <div className="App">
      <Counter />
      <Products />
      <Users></Users>
    </div>
  );
};

export default App;
