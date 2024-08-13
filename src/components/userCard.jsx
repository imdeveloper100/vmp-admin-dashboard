import React from "react";
import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <div className="px-4 py-2 border-2 border-gray-200 bg-gray-100 rounded-xl flex flex-col items-center">
      <Link>
        <img
          className="p-2 bg-yellow-400 rounded-full"
          src={user?.image}
          width={100}
          alt="employee-1 pic"
        />
      </Link>
      <Link className="mt-2 text-md font-semibold text-gray-600 text-center">
        {user?.name}
      </Link>
      <div className="text-center">
        <span className="text-sm text-gray-400">{user?.email}</span>
        <span className="text-sm text-gray-300"> | </span>
        <span className="text-sm text-gray-400">{user?.phone}</span>
      </div>
    </div>
  );
}

export default UserCard;
