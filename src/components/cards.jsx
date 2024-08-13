import React from "react";
import Card from "./card";

function Cards({ products }) {
  return (
    <>
      <div className=" grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 cardsGrid ">
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </>
  );
}
export default Cards;
