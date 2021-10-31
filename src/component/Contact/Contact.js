import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <div className='row container contact-container'>
                <div className='col-md-12 pb-4 text-center'>
                    <h2 className='text-center'> Please Contact Us</h2>
                </div>
                <div className='col-md-7'>
                    <div className='text-center'>


                        <form>
                            <input className='one-input' type='text' placeholder='Name'></input>
                            <br />
                            <input className='one-input' type='text' placeholder='Address'></input>
                            <br />
                            <input className='message-input' type='text' placeholder='Your Messeage'></input>
                            <br />

                            <br />
                            <input className='nav-button btn mb-5' type='submit' placeholder='Your Message'></input>
                        </form>
                    </div>

                </div>
                <div className='col-md-5 text-center pb-5'>

                    <img className='img-fluid' src='https://images.pexels.com/photos/4246101/pexels-photo-4246101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                </div>

            </div>



        </div>
    );
};

export default Contact;