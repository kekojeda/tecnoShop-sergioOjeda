import React from 'react';
import { Item } from './Item'


function ItemList({ items }){
return(
    <div>
        {items.map( ({id, title, price, description, category, image}) => (
            <Item 
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                key={id} />


            ))}


    </div>

);
}

export { ItemList }

