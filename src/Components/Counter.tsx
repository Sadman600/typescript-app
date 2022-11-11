import React, { useState } from "react";
import User from "./User";

interface Person {
  name?: string;
  age?: number;
}
const Counter = () => {
  const [counter, setCounter] = useState<number>(0);
  const [user, setUser] = useState<Person>({});

  const handleCounter = (): void => {
    setCounter(counter + 1);
  };
  const handleUser = () => {
    const person = {
      name: "Jhon",
      age: 30,
    };
    setUser(person);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleCounter}>+</button>
      <button onClick={handleUser}>Add User</button>
    
    </div>
  );
};

export default Counter;
