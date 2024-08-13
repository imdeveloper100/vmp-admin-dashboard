import React from 'react'
import toyotaCar1 from "../assets/toyota-car.png"; // Import the image
import Card from './card';

function Vehicles() {
  var products = [
    {
      id: 1,
      name: "Toyota Hybrid 2024",
      location: "Islamabad",
      href: "#",
      imageSrc: toyotaCar1, // Use the imported image variable here
      imageAlt: "Toyota Hybrid 2000cc",
      price: "35,000",
      seller: {
        phoneNumber: 312312312312,
        email: "a@a.com",
      },
    },
    {
      id: 2,
      name: "Toyota Hybrid 2024",
      location: "Islamabad",
      href: "#",
      imageSrc: toyotaCar1, // Use the imported image variable here
      imageAlt: "Toyota Hybrid 2000cc",
      price: "35,000",
      seller: {
        phoneNumber: 312312312312,
        email: "a@a.com",
      },
    },
    {
      id: 3,
      name: "Toyota Hybrid 2024",
      location: "Islamabad",
      href: "#",
      imageSrc: toyotaCar1, // Use the imported image variable here
      imageAlt: "Toyota Hybrid 2000cc",
      price: "35,000",
      seller: {
        phoneNumber: 312312312312,
        email: "a@a.com",
      },
    },
    {
      id: 4,
      name: "Toyota Hybrid 2024",
      location: "Islamabad",
      href: "#",
      imageSrc: toyotaCar1, // Use the imported image variable here
      imageAlt: "Toyota Hybrid 2000cc",
      price: "35,000",
      seller: {
        phoneNumber: 312312312312,
        email: "a@a.com",
      },
    },
    {
      id: 5,
      name: "Toyota Hybrid 2024",
      location: "Islamabad",
      href: "#",
      imageSrc: toyotaCar1, // Use the imported image variable here
      imageAlt: "Toyota Hybrid 2000cc",
      price: "35,000",
      seller: {
        phoneNumber: 312312312312,
        email: "a@a.com",
      },
    },
  ];
  return (
    <div>
      <h1 className="pt-4 pb-1 px-4 border-b-4 border-indigo-100 text-3xl font-bold text-gray-500">Vehicles</h1>
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

export default Vehicles