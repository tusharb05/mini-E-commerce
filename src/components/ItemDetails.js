import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import data from '../utils/data'
import {Link} from 'react-router-dom';

function ItemDetails({cartItems, addToCart}) {
    const {productId} = useParams();

    let newArr = data.filter((x, index)=>index===productId-1)
    // console.log(newArr);

    const {name, price, brand, images, text, id} = newArr[0];

    const [showcaseImg, setShowcaseImg] = useState(0); //first image

    return (
        <>
        <div className="title">
            <h2 style={{marginTop:'20px'}}>{name}</h2>
            <div className="underline"></div>
        </div>

        <div className="details">
            <div className="image-section">
                <img src={images[showcaseImg]} alt='' />
                <div className="other-img">
                    {
                        images.map((x, index)=>{
                            return <img src={x} alt="" key={index} onClick={()=>setShowcaseImg(index)}/>
                        })
                    }
                </div>
                
            </div>
            <div className="detail-info">
                <p>{text}</p>
                <p className="price">Price: <span className="price-detail">${price}</span></p>
                <p className="brand">Brand: {brand}</p>
                <Link to="/cart">
                    <button className="add-to-cart" onClick={()=>{
                        cartItems.push(newArr[0])
                        addToCart(cartItems);
                    }}>
                        Add to Cart
                    </button>
                </Link>
            </div>  
        </div>
        </>
    )
}

export default ItemDetails
