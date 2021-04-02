import React, { useEffect, useState } from 'react';

const ManageProduct = () =>
{
    const [products, setProducts] = useState([]);

    useEffect(() =>
    {
        fetch('https://nameless-atoll-08724.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Wight</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product =>{
                        return <tr>
                            <td>{product.name}</td>
                            <td>{product.weight}</td>
                            <td>{product.price}</td>
                            <td>
                                <button className="btn btn-primary">Edit</button>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ManageProduct;