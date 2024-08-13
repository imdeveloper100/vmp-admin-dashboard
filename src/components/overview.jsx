import React from "react";
import { Badge } from "antd";

function Overview() {
  const stats = [
    { id: 1, name: "Number of Users till Now", value: "444" },
    { id: 2, name: "Total Vehicles Registered", value: "1,024" },
    { id: 3, name: "Total Spare Parts", value: "46,000" },
  ];
  return (
    <div>
      <h1 className="pt-4 pb-1 px-4 border-b-4 border-indigo-100 text-3xl font-bold text-gray-500">Overview</h1>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {/* Users */}
            <Badge.Ribbon text="Users" color="green">
              <div
                key={stats[0].id}
                className="flex flex-col bg-gradient-to-r from-emerald-500 to-emerald-900 gap-y-4 py-8 rounded-lg"
              >
                <dt className="text-base leading-7 text-gray-200">
                  {stats[0].name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-wider text-gray-200 sm:text-5xl">
                  {stats[0].value}
                </dd>
              </div>
            </Badge.Ribbon>
            {/* Vehicles */}
            <Badge.Ribbon text="Vehicles" color="indigo">
              <div
                key={stats[1].id}
                className="flex flex-col bg-gradient-to-r from-fuchsia-500 to-cyan-500 gap-y-4 py-8 rounded-lg"
              >
                <dt className="text-base leading-7 text-gray-200">
                  {stats[1].name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-200 sm:text-5xl">
                  {stats[1].value}
                </dd>
              </div>
            </Badge.Ribbon>
            {/* Spare Parts */}
            <Badge.Ribbon text="Spare Parts" color="purple">
              <div
                key={stats[2].id}
                className="flex flex-col bg-gradient-to-r from-fuchsia-700 to-orange-500 gap-y-4 py-8 rounded-lg"
              >
                <dt className="text-base leading-7 text-gray-200">
                  {stats[2].name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-200 sm:text-5xl">
                  {stats[2].value}
                </dd>
              </div>
            </Badge.Ribbon>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Overview;
