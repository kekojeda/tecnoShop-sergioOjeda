import React, { useState } from 'react';
import { ItemCount } from './ItemCount';
import { ItemList } from './ItemList';
import products from '../products.json'

function ItemListContainer({greeting}){


    const [list, setList] = useState([])

  

    const asyncMock = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(  setList(products) );
        }, 2000);
      });
      
 




   
    return(
        <>
        
            <div className='card text-center'></div>
            <div className="card text-center">
                <div className="card-header">
                    Item
                </div>
                <div className="card-body">
                    <h5 className="card-title">{greeting}</h5>
                    <ItemList items={list} />

                    <ItemCount stock={5} initial={1} onAdd={(n) => alert(`Se agregaron ${n} productos en el carrito`)} />



                </div>

            </div>

            

           




        </>
        
    );

}

export { ItemListContainer }