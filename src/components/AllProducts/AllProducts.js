import React from 'react';
import { useHistory } from 'react-router-dom';
import './AllProducts.css'

const AllProducts = (props) => {
    
    const { _id, name, imageURL, price, quantity } = props.products
    const history = useHistory()
    
    const handleAddCart = (id) =>{
        history.push(`/checkout/${id}`)
    }

    return (
        <div>
            <div className="productCard">
                <img className="productImg" src={imageURL} style={{ width: "100%" }} alt="" />
                <h6>{name}</h6>
                <p>Stock : {quantity}</p>
                <h5>${price}</h5>   
            </div>
            <div onClick={()=>handleAddCart(_id)} className="addCart">
                <p>Add To Cart</p>
            </div>
        </div>
    );
};

export default AllProducts;