import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

    return (
        <div className="headerContainer">
            <nav className="navbar navbar-expand-lg navbar-light pr-5 pl-5">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">MAMA'S Stock Room</Link>
                    <div className="float-end">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <div className="navbar-nav">
                                    <Link to="/" className="nav-item mr-5">Home</Link>
                                    <Link to="/orders" className="nav-item mr-5">Orders</Link>
                                    <Link to="/admin" className="nav-item mr-5">Admin</Link>
                                    <Link className="nav-item mr-5">Details</Link>
                                </div>
                                
                                <Link to="/login"><button className="loginBtn">Log in</button></Link>
                                
                            </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;