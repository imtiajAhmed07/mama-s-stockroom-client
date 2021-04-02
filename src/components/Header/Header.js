import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

    return (
        <div className="headerContainer sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light pr-5 pl-5" style={{backgroundColor: "white", borderBottom: '1px solid rgba(0, 0, 0, 0.3)'}}>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" style={{fontSize: "25px", fontWeight: "500"}}>Mama's stockroom</Link>
                    <div className="float-end">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <div className="navbar-nav">
                                    <Link style={{textDecoration: "none"}} to="/" className="nav-item text-dark mr-5">Home</Link>
                                    <Link style={{textDecoration: "none"}} to="/orders" className="nav-item text-dark mr-5">Orders</Link>
                                    <Link style={{textDecoration: "none"}} to="/admin" className="nav-item text-dark mr-5">Admin</Link>
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