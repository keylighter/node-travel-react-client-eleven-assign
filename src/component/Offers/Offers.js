import React, { useEffect, useState } from 'react';
import Offer from '../Offer/Offer';

const Offers = () => {

    const [offers, setOffers] = useState([]);

    // Heroku - https://blooming-wave-96355.herokuapp.com/

    useEffect(() => {
        fetch('http://localhost:5000/offers')
            .then(res => res.json())
            .then(data => setOffers(data));
    }, [])

    return (
        <div className='pb-5'>
            <h2 className='text-center pt-5 pb-5 fw-bold '>Your Tour Options</h2>
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