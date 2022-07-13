import React, { useState } from 'react';
import { ItemCount } from './ItemCount';
import { ItemList } from './ItemList';
import products from '../products.json'
import { ItemDetailContainer } from './ItemDetailContainer';


function ItemListContainer({ greeting }) {

    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const asyncMock = new Promise((resolve) => {
        setTimeout(() => {
            resolve(products, setIsLoading(false));
            
        }, 2000);
    });

    asyncMock.then((products) => setList(products))

   




    return (
        <>  
            

            
            <div className="container">
                <h5 className="card-title">{greeting}</h5>
                <div className="row">
                    {
                        isLoading ? (
                            <div className="d-flex align-items-center">
                                <h2><strong>No entres en pánico, estamos cargando los productos ....</strong></h2>
                                <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                            </div>
                        ) : (<>
                            
                            <ItemList items={list} />
                          
                            
                            </>
                            
                            )
                    }

                   

                    

                    
                    
                </div>
            </div>

        </>
    );
}

export { ItemListContainer }