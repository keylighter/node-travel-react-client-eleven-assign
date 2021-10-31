import React, { useRef, useState } from 'react';

const AddNewOffer = () => {
    // const [] =useState([]);

    const nameRef = useRef();
    const imageRef = useRef();
    const descriptionRef = useRef();

    const handleAddOffer = (e) => {
        e.preventDefault();
        alert('New Product Added!!');
        const name = (nameRef.current.value);
        const image = (imageRef.current.value);
        const description = (descriptionRef.current.value);

        const newOffer = { name: name, image: image, description: description }

        fetch('https://blooming-wave-96355.herokuapp.com/offers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOffer)
        })
    }

    return (
        <div>
            <h4 className='text-center pt-5 pb-5'>Lets Add Your Preference!!!</h4>

            <div className='text-center pb-5'>
                <form onSubmit={handleAddOffer}>
                    <input required type='name' placeholder='Name' ref={nameRef}></input>
                    <br /> <br />
                    <input className='py-5' required type='text' placeholder='description' ref={descriptionRef}></input>
                    <br /><br />
                    <input required type='url' placeholder='Image Url' ref={imageRef}></input>
                    <br /><br />
                    <input className='btn btn-danger' required type='submit' placeholder='' ></input>


                </form>
            </div>

        </div>
    );
};

export default AddNewOffer;