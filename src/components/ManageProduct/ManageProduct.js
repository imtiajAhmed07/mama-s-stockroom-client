import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';

class ManageProduct extends React.Component
{
    state = {
        products: []
    }

    handleDelete = (id) =>
    {
        if (window.confirm("Do you want to delete this item"))
        {
            fetch('http://localhost:5055/delete/' + id, {
                method: "GET"
            }

            )
                .then(res => res.json())
                .then(data => this.setState({
                    products: this.state.products.filter(c => c._id != id)
                }))

        }

    }


    componentDidMount()
    {
        this.useEffect();
    }

    useEffect = () =>
    {
        fetch('https://nameless-atoll-08724.herokuapp.com/products')
            .then(res => res.json())
            .then(data => this.setState({
                products: data
            }))
    }
    render()
    {
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
                        {this.state.products.map(product =>
                        {
                            return <tr>
                                <td>{product.name}</td>
                                <td>{product.weight}</td>
                                <td>${product.price}</td>
                                <td>
                                    <button className="btn-sm btn-primary mr-2">Edit</button>
                                    <button className="btn-sm btn-danger" onClick={() => this.handleDelete(product._id)}>Delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>

        )
    }
}


export default ManageProduct;