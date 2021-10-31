import React from 'react';
import Contact from '../Contact/Contact';
import Offers from '../Offers/Offers';

import './Home.css'

const Home = () => {
    return (
        <div>
            <Offers></Offers>

            <div className='offer-container'>
                <div className='row justify-content-center align-items-center pt-5 pb-5 '>

                    <h3 className='pb-5 fw-bold text-center text-dark'>Our Specialization</h3>

                    <div className='col-md-2'>
                        <div className="card offer-card" >
                            <div className="card-body">
                                <h5 className="card-title">Expert Hikers</h5>

                                <p className="card-text">Our hikers are so expert in the hiking so your risks are minimized drastically , you just need to enjoy</p>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className="card offer-card" >
                            <div className="card-body">
                                <h5 className="card-title">Technical Supports</h5>

                                <p className="card-text">Our technical teams are always ready to take calls from you and solve it as soon as possible . </p>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className="card offer-card" >
                            <div className="card-body">
                                <h5 className="card-title">Personalized Care</h5>

                                <p className="card-text">While tour if you need any perssonalised suppoprt we are always ready to support you </p>

                            </div>
                        </div>
                    </div>



                </div>
            </div>

            <Contact></Contact>
        </div>
    );
};

export default Home;