import React, { FC } from "react";
import UserModel from "../types/userModels";
interface Props {
  user: UserModel;
  handleAddUser: (user: UserModel) => void;
}
const User: FC<Props> = ({ user, handleAddUser }) => {
  return (
    <div>
      <h1>Name: {user.name}</h1>
      <p>{user.email}</p>
      <p>{user.id}</p>
      <button onClick={() => handleAddUser(user)}>Add User</button>
    </div>
  );
};

export default User;
