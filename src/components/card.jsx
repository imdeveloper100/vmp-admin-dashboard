import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const [isDisabled, setIsDisabled] = useState(false); // State to track button status

  const toggleDisable = () => {
    setIsDisabled(!isDisabled);
  };
  return (
    <>
      <div
        key={product.id}
        className="my-2 group relative border border-stone-200 rounded-md p-3"
      >
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-50">
          <Link to="">
            {" "}
            <img
              src={product?.imageSrc}
              alt={product?.imageAlt}
              width={400}
              height={400}
              className="min-h-[200px] min-w-[200px] object-cover object-center lg:h-full lg:w-full"
            />
          </Link>
        </div>
        <div className="mt-2 flex justify-between">
          <div>
            <p className="mt-1 text-xs text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-3 h-3 mb-[3px] inline mx-[2px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              {product?.location}
            </p>
          </div>
          <p className="text-sm mt-.75 mr-2 font-semibold text-indigo-600">
            {"¥" + product?.price}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900 ">
            <Link href="">
              <span aria-hidden="true" className="inset-0" />
              {product?.name}
            </Link>
          </h3>
        </div>
        <div className="py-2 mt-2 border-t-2 flex justify-center">
          <span className="text-gray-400 text-xs mx-1">2014</span>
          <span className="text-gray-400 text-xs mx-1">|</span>
          <span className="text-gray-400 text-xs mx-1">Petrol</span>
          <span className="text-gray-400 text-xs mx-1">|</span>
          <span className="text-gray-400 text-xs mx-1">2000km</span>
        </div>
        <div className="py-2 mb-2 border-t-2 flex justify-center">
          <span className="text-gray-400 text-xs mx-1">AC</span>
          <span className="text-gray-400 text-xs mx-1">|</span>
          <span className="text-gray-400 text-xs mx-1">AirBag</span>
          <span className="text-gray-400 text-xs mx-1">|</span>
          <span className="text-gray-400 text-xs mx-1">DVD Player</span>
        </div>
        <div className="mt-2 w-full flex gap-2">
          <button
            type="submit"
            className="w-full flex items-center justify-center rounded-md bg-blue-600 py-1 font-base text-base text-white hover:bg-blue-500  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Edit
          </button>
          <button
            type="button"
            className={`w-full flex items-center justify-center rounded-md py-1 font-base text-base text-white hover:focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isDisabled
                ? "bg-gray-600 hover:bg-gray-500 focus:ring-gray-500"
                : "bg-green-600 hover:bg-green-500 focus:ring-green-500"
            }`}
            onClick={toggleDisable}
          >
            {isDisabled ? "Disabled" : "Enabled"} {/* Toggle button text */}
          </button>
          <button
            type="submit"
            className="w-full flex items-center justify-center rounded-md bg-red-600 py-1 font-base text-base text-white hover:bg-red-500  focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
