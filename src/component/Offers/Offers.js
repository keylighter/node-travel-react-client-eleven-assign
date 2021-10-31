import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Offer from '../Offer/Offer';

const Offers = () => {

    const { isLoading } = useAuth();
    const [offers, setOffers] = useState([]);

    // Heroku - https://blooming-wave-96355.herokuapp.com/

    useEffect(() => {
        fetch('https://blooming-wave-96355.herokuapp.com/offers')
            .then(res => res.json())
            .then(data => setOffers(data));
    }, [])

    return (
        <div className='pb-5'>
            <h2 className='text-center pt-5 pb-5 fw-bold '>Your Tour Options</h2>

            {
                isLoading &&
                <div className=' text-center pb-4 pt-5'>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            <div className='row justify-content-center ps-5 ms-5  gy-4 '>
                {/* mapping services */}
                {
                    offers?.map(offer => (
                        <div className='col-md-5'>
                            <Offer
                                key={offer?.id}
                                offer={offer}
                            ></Offer>
                        </div>
                    )
                    )
                }

            </div>

        </div>
    );
};

export default Offers;