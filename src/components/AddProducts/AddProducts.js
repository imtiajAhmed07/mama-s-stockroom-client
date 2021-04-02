import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProducts.css'

const AddProducts = () => {
    
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            quantity: data.quantity,
            imageURL: imageURL
        }
        const url = `https://nameless-atoll-08724.herokuapp.com/addProducts`


        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response', res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData()
        imageData.set('key', 'a6dd3054730fb06249f950b9c5129c0d')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
        imageData)
            .then(function (response){
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error){
                console.log(error);
            });

    }

    return (
        <div className="addProductContainer">
            <h2>Add your products from here</h2><br/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" placeholder="Product Name" ref={register} /><br/><br/>
                <input name="price" placeholder="Price" ref={register} /><br/><br/>
                <input name="quantity" placeholder="Stock" ref={register} /><br/><br/>
                <input name="image" type="file" onChange={handleImageUpload} /><br/><br/>

                <input className="submitButton" type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;