import React from 'react';
import { ItemCount } from './ItemCount';

function ItemListContainer({greeting}){
    return(
        <>
            <div className='card text-center'></div>
            <div class="card text-center">
                <div class="card-header">
                    Item
                </div>
                <div class="card-body">
                    <h5 class="card-title">{greeting}</h5>
                    
                    <ItemCount stock={3} initial ={1} onAdd={(n) => alert(`Se agregaron ${n} productos en el carrito`)}/>
                    
                    
                </div>
              
            </div>
        </>
        
    );

}

export { ItemListContainer }