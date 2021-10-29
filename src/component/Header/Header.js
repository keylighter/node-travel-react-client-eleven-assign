import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="header row d-flex  align-items-center justify-content-center">

                <div className="col-md-6">
                    <h1 className="title fw-bold text-white text-center">
                        Travel With Us
                        <br />Being An Explorer.
                    </h1>
                    <p className="text-white text-center mt-3 fs-5 fw-bold">
                        Travelling is moving and exploring ,its dynamic not a mere destination. So never settle.
                    </p>

                </div>
                <div className="col-md-6 ps-5 ">
                    <Link to='/about'>
                        <button className="mt-3 head-button me-3">About Us</button>
                    </Link>
                    <Link to='/register'>
                        <button className="mt-3 head-button ms-3">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;