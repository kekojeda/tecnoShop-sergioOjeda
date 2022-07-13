import React from 'react';

function Item({id, title, description, price, image}){
return(
    <>

    <div className="col-3">
            <div className="card">
                <h5 className="card-title mx-auto">{title}</h5>
                <img src={image} className="w-50  mx-auto" alt={title} />
                <div className="card-body mx-auto">
                    <p className="card-text">{description}</p>
                    <p className="card-text mx-auto">${price}</p>
                    <a href={"./" + id} className="btn btn-primary">Ver detalle del producto</a>
                </div>
            </div>

        </div>
    </>
    

)
}

export { Item }