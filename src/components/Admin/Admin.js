import React from 'react';
import './Admin.css'
import AddProducts from '../AddProducts/AddProducts';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
            <div className="adminContainer">
                <div className="sideBar">
                    <Link to="/manageProduct"><h1>Manage Product</h1></Link>
                    <Link to="/addProduct"><h1>Add Product</h1></Link>
                </div>
                <div className="addProductContainer">
                    <AddProducts></AddProducts>
                </div>
            </div>
        </div>
    );
};

export default Admin;