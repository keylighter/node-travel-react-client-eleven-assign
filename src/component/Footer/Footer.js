import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'


import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {

    faPhoneVolume,
    faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="left-container text-start">

                            <a class=" d-flex align-items-center" href="#">
                                <img src="https://demo.bosathemes.com/travele/wp-content/uploads/sites/13/2021/08/travele-img.png" alt="" width="120" height="32" className="d-inline-block align-text-top me-2" />

                            </a>
                            <p className="mt-4 ">
                                <small>
                                    We Provide The Best Travelling Planning Service In The Country . Considering The Quality And Ultimate Care
                                </small>
                            </p>
                            <div className="icons-container d-flex text-center ">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faInstagramSquare} />
                                </div>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faTwitterSquare} />
                                </div>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </div>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                </div>
                            </div>


                            <p className="mt-5">
                                <small>Travele © . All rights reserved.</small>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="footer-menu-container">
                            <ul>
                                <li className="footer-menu fw-bold">Home</li>
                                <li className="footer-menu fw-bold">Services</li>
                                <li className="footer-menu fw-bold"> About us</li>
                                <li className="footer-menu fw-bold"> Blog</li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="right-footer-container">
                            <h3>Sign up to get <span className='foot-span'>TRAVELLING TIPS!!!</span></h3>
                            <input
                                className="footer-input mt-3 "
                                type="text"
                                placeholder="Enter Email"
                            />
                            <div className="phone d-flex   mt-4">
                                <div className="foot-icon me-2">
                                    <FontAwesomeIcon icon={faPhoneVolume} />
                                </div>
                                <div>
                                    <h6>+ 00 88557744552</h6>
                                </div>
                            </div>
                            <div className="map d-flex  ">
                                <div className="foot-icon me-2">
                                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                                </div>
                                <div>
                                    <p>
                                        1A , Best garden , Heavenpur
                                        <br /> Karmonokas , Utopia ,Happy Island                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;