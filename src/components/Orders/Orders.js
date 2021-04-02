import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orderedProducts, setOrderedProducts] = useState([])
    const {email} = loggedInUser

    useEffect(()=>{
        console.log(email)
        fetch(`http://localhost:5055/orderedProduct/${email}`)
            .then(res => res.json())
            .then(data => filteredOrder(data))
    }, [])
    
    const filteredOrder = (data) =>{
        const filterData = data.filter((order) => order.email == loggedInUser.email)
        setOrderedProducts(filterData)
    }

    return (
        <div>

            <h3 className="text-center mb-5 ">Your Order History</h3>

            <table className="table table-dark" style={{width: "90%", margin: "auto"}}>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderedProducts.map(pd =>
                            <tr>
                                <td>{pd.name}</td>
                                <td>${pd.price}</td>
                                <td>{pd.quantity}</td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Orders;