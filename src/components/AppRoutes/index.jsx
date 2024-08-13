import React from "react";
import { Routes, Route } from "react-router-dom";
import Overview from "../overview";
import Vehicles from "../vehicles";
import SpareParts from "../spareparts";
import UsersCard from "../usersCard";

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Overview />}></Route>
        <Route path="/users" element={<UsersCard />}></Route>
        <Route path="/vehicles" element={<Vehicles />}></Route>
        <Route path="/spareparts" element={<SpareParts />}></Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
