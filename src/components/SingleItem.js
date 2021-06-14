import React from 'react';
import {Link} from 'react-router-dom';

function SingleItem({singleItem}) {
    return (
        <div className="single-tour">
            <Link to={`/products/${singleItem.id}`}>
                <img src={singleItem.images[0]} alt="" />
            </Link>
            
            <footer>
                <div className="tour-info">
                    <h4>{singleItem.name}</h4>
                    <h4 className="tour-price">${singleItem.price}</h4>
                </div>
            </footer>
        </div>
    )
}

export default SingleItem
