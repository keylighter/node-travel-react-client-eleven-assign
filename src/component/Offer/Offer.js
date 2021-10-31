import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Offer.css'

const Offer = ({ offer }) => {
    const { name, image, description } = offer;
    return (
        <div>
            <div className="card pb-3 w-75  " >
                <img src={image} className="card-img-top offer-img" alt="..." />
                <div className="Nameard-body row justify-content-center">
                    <h5 className="card-title fw-bold pt-3 w-75">{name}</h5>
                    <p className="card-text ms-3 me-3"> {description} </p>
                    <div className=' '>
                        <Link to='/detail/:offerId'>
                            <button className='w-25 detail-button fw-bold'>See Detail</button>
                        </Link>
                        <Link to='/booking'>
                            <button className=' w-25 detail-button fw-bold'>Book Now</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Offer;