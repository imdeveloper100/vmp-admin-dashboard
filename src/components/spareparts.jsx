import React from 'react'
import spareParts1 from "../assets/spareparts-1.png";
import spareParts2 from "../assets/spareparts-2.png";
import Card from './card';

function Spareparts() {
  var products = [
    {
      id: 1,
      name: "Auto Engine Part",
      location: "Lahore",
      href: "#",
      imageSrc: spareParts1,
      imageAlt: "Automative Engine Part 3",
      price: "500",
      seller: {
        phoneNumber: 321321321321,
        email: "b@b.com",
      },
    },
    {
      id: 2,
      name: "Car Wheel Parts",
      location: "Karachi",
      href: "#",
      imageSrc: spareParts2,
      imageAlt: "Car Wheel Parts",
      price: "2000",
      seller: {
        phoneNumber: 333333333333,
        email: "c@c.com",
      },
    },
    {
      id: 3,
      name: "Auto Engine Part",
      location: "Lahore",
      href: "#",
      imageSrc: spareParts1,
      imageAlt: "Automative Engine Part 3",
      price: "500",
      seller: {
        phoneNumber: 321321321321,
        email: "b@b.com",
      },
    },
    {
      id: 4,
      name: "Car Wheel Parts",
      location: "Karachi",
      href: "#",
      imageSrc: spareParts2,
      imageAlt: "Car Wheel Parts",
      price: "2000",
      seller: {
        phoneNumber: 333333333333,
        email: "c@c.com",
      },
    },
    {
      id: 5,
      name: "Auto Engine Part",
      location: "Lahore",
      href: "#",
      imageSrc: spareParts1,
      imageAlt: "Automative Engine Part 3",
      price: "500",
      seller: {
        phoneNumber: 321321321321,
        email: "b@b.com",
      },
    },
    {
      id: 6,
      name: "Car Wheel Parts",
      location: "Karachi",
      href: "#",
      imageSrc: spareParts2,
      imageAlt: "Car Wheel Parts",
      price: "2000",
      seller: {
        phoneNumber: 333333333333,
        email: "c@c.com",
      },
    },
    // Add more spare parts objects as needed
  ];
  return (
    <div>
      <h1 className="pt-4 pb-1 px-4 border-b-4 border-indigo-100 text-3xl font-bold text-gray-500">Spare Parts</h1>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6">
        {/* Product grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Product grid */}
          {products?.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Spareparts