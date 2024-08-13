import React from "react";
import UserCard from "./userCard";

import employee1 from "../assets/employee-1.png";
import employee2 from "../assets/employee-2.png";
import employee3 from "../assets/employee-3.png";
import employee4 from "../assets/employee-4.png";

function UsersCard() {
  const users = [
    {
      id: 1,
      image: employee1,
      name: "Stepanie White",
      email: "abc@gmail.com",
      phone: "+92 340 3906 446",
    },
    {
      id: 2,
      image: employee2,
      name: "Alex Gray",
      email: "abc@gmail.com",
      phone: "+92 340 3906 446",
    },
    {
      id: 3,
      image: employee3,
      name: "John Smith",
      email: "abc@gmail.com",
      phone: "+92 340 3906 446",
    },
    {
      id: 4,
      image: employee4,
      name: "Peter Paul",
      email: "abc@gmail.com",
      phone: "+92 340 3906 446",
    },
    {
      id: 5,
      image: employee4,
      name: "Peter Paul",
      email: "abc@gmail.com",
      phone: "+92 340 3906 446",
    },
    {
      id: 6,
      image: employee1,
      name: "Stepanie White",
      email: "abc@gmail.com",
      phone: "+92 340 3906 446",
    },
    {
      id: 7,
      image: employee2,
      name: "Alex Gray",
      email: "abc@gmail.com",
      phone: "+92 340 3906 446",
    },
    {
      id: 8,
      image: employee3,
      name: "John Smith",
      email: "abc@gmail.com",
      phone: "+92 340 3906 446",
    },
    {
      id: 9,
      image: employee4,
      name: "Peter Paul",
      email: "abc@gmail.com",
      phone: "+92 340 3906 446",
    },
    {
      id: 10,
      image: employee4,
      name: "Peter Paul",
      email: "abc@gmail.com",
      phone: "+92 340 3906 446",
    },
  ];
  
  return (
    <div>
      <h1 className="pt-4 pb-1 px-4 border-b-4 border-indigo-100 text-3xl font-bold text-gray-500">
        Users
      </h1>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6">
          {/* Users Card */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {users?.map((user, index) => (
              <UserCard key={index} user={user} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersCard;
