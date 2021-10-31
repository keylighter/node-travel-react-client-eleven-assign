import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Navbar.css'


import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {

    const { user, logOut } = useAuth();

    return (
        <div>
            <nav className='d-flex justify-content-between align-items-center ps-4 pe-4 pt-1 pb-1 ' >
                <div>
                    <Link to='' className='text-decoration-none text-dark'>
                        <a class=" d-flex align-items-center" href="#">
                            <img src="https://demo.bosathemes.com/travele/wp-content/uploads/sites/13/2021/08/travele-img.png" alt="" width="140" height="40" className="d-inline-block align-text-top me-2" />

                        </a>
                    </Link>
                </div>
                {/* <div>
                    <input type='search' placeholder='Search Here' className='rounded-3 ps-4'></input>
                    <button type='submit' className='rounded-3 btn-primary'>Search</button>
                </div> */}
                <div className='  d-flex justify-content-end align-items-center gx-3'>
                    <Link to='/home' className='text-decoration-none fw-bold fs-6 '>
                        <p className='pe-3 pt-2 nav-text'>Home</p>
                    </Link>
                    <Link to='/offers' className=' text-decoration-none fw-bold fs-6'>
                        <p className='pe-3 pt-2 nav-text'>Offers</p>
                    </Link>
                    <Link to='/login' className='text-decoration-none fw-bold fs-6'>
                        <p className='pe-3 pt-2 nav-text'>Login</p>
                    </Link>
                    <Link to='' className='text-decoration-none fw-bold fs-6'>
                        <p className='pe-3 pt-2 nav-text'>Admin</p>
                    </Link>
                    {user.email && <span className='me-2' style={{ color: 'white' }}>Hello {user.displayName} </span>}

                    {
                        user.email ?
                            <button className='btn  me-2 nav-button' onClick={logOut}>log out</button>
                            :
                            <Link to='/register'>
                                <button className='btn  me-2 nav-button'><FontAwesomeIcon icon={faUser} />   Register</button>
                            </Link>

                    }
                    {/* <Link to='/register'>
                        <button className='btn  me-2 nav-button'><FontAwesomeIcon icon={faUser} />   Register</button>
                    </Link> */}
                    {/* <button className='btn   nav-button'>  Admin</button> */}
                </div>
            </nav >
        </div >
    );
};

export default Navbar;