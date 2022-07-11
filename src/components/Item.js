import React from 'react';

function Item({id, title, description, price, image}){
return(
    <>


        <div className="card" style={{ width: 18 + 'rem' }}>
            <h5 className="card-title">{title}</h5>
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <p className="card-text">{description}</p>
                <p className="card-text">${price}</p>
                <a href={"./" + id} className="btn btn-primary">Ver detalle del producto</a>
            </div>
        </div>
    
    
    </>
    

)
}

export { Item }