import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import './Checkout.css'
import { UserContext } from '../../App';

const Checkout = () => {
    
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const {name, price, quantity} = product

    useEffect(()=>{
        fetch(`http://localhost:5055/checkout/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    
    const handleCheckOut = () => {
        
        const {email} = loggedInUser
        const orderedInfo = {name, price, quantity, email}

        const url = `http://localhost:5055/addedProduct`

        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(orderedInfo)
        })
        .then(res => console.log('server side response', res))

    }

    return (
        <div className="checkoutContainer">

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Stock</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>{quantity}</td>
                    </tr>
                </tbody>
            </table>

            <button onClick={handleCheckOut} className="checkoutBtn">Checkout</button>

        </div>
    );
};

export default Checkout;