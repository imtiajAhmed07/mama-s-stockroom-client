import React, { useEffect, useState } from 'react';
import AllProducts from '../AllProducts/AllProducts';
import './Home.css'
import spinner from '../../images/spinner.gif'

const Home = () => {
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            fetch('http://localhost:5055/products')
                .then(res => res.json())
                .then(data =>{
                    setProducts(data)
                    setLoading(false)
                })
        },2000)
    }, [])

    return (
        <div>
            <div className="productContainer">
                {
                    loading ? <img className="spinner" src={spinner}/> :
                    products.map(products => <AllProducts products={products}></AllProducts>)
                }
            </div>
        </div>
    );
};

export default Home;