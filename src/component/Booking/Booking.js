import React from 'react';
import './Booking.css'

const Booking = () => {

    const handleConfirm = () => {
        alert('Your Booking Is Confirmed')
    }

    return (
        <div className='pt-2 pb-5'>
            <h2 className='text-center pt-5 pb-4'>Confirm Your Booking!!!</h2>
            <div className='text-center'>
                <form onSubmit={handleConfirm}>
                    <input className='book-input' type='text' required></input>
                    <br /><br />
                    <input className='book-input' type='text' required></input>
                    <br /><br />
                    <input className='book-input' type='text' required></input>
                    <br /><br />
                    <input className='book-input' type='date' required></input>
                    <br /><br />
                    <button className='book-button' type='submit'>Confirm</button>
                </form>
            </div>

        </div>
    );
};

export default Booking;