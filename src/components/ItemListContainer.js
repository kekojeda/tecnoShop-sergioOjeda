import React from 'react';

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
                    <p class="card-text">Texto ejemplo de tarjeta</p>
                    
                </div>
              
            </div>
        </>
        
    );

}

export { ItemListContainer }