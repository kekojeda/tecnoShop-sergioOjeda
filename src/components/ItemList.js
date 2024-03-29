import React from "react";
import { Item } from "./Item";

function ItemList({ items }) {
  return (
    <>
      {items.map(({ id, title, price, category, description, image }) => (
        <Item
          id={id}
          title={title}
          price={price}
          category={category}
          image={image}
          key={id}
          description={description}
        />
      ))}
    </>
  );
}

export { ItemList };
