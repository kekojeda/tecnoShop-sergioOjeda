import React, { useState } from 'react';
import { ItemDetail } from './ItemDetail';

function ItemDetailContainer({greeting}){

    const product = 
        {
            "id": 3,
            "title": "Mens Cotton Jacket",
            "price": 55.99,
            "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            "rating": {
                "rate": 4.7,
                "count": 500
            }
        }
    


    const [detail, setDetail] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    

    const getItem = new Promise((resolve) => {
        setTimeout(() => {
            resolve(product, setIsLoading(false));
            
        }, 2000);
    });

    getItem.then((product) => setDetail(product))


    return(
        <>
          <div className="container">
                <h5 className="card-title">{greeting}</h5>
                <div className="row">
                    {
                        isLoading ? (
                            <div className="d-flex align-items-center">
                                <h2><strong>No entres en pánico, estamos cargando el Detalle del producto ....</strong></h2>
                                <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                            </div>
                        ) : (<>
                            
                            <ItemDetail items={detail} />
                          
                            
                            </>
                            
                            )
                    }

                   

                    

                    
                    
                </div>
            </div>
        
        
        </>
    )

}


export { ItemDetailContainer }