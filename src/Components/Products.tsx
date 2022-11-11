import React, { FormEvent, useState } from "react";
interface Users {
  fullName: string;
  email: any;
  password: any;
}
const Products = () => {
  const [users, setUsers] = useState<Users | null>(null);
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setUsers({ fullName: "sad", email: "sad@gmail.com", password: "000" });
  };
  console.log(users);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fullname" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" name="Submit" />
      </form>
    </div>
  );
};

export default Products;
