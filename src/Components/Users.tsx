import React, { useEffect, useState } from "react";
import UserModel from "../types/userModels";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState<UserModel[]>([]);
  const [newUser, setNewUser] = useState<UserModel[]>([]);
  const handleAddUser = (user: UserModel): void => {
    setNewUser([...newUser, user]);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
        <h2>{newUser.length}</h2>
      {users.map((user) => (
        <User user={user} handleAddUser={handleAddUser} />
      ))}
    
    </div>
  );
};

export default Users;
