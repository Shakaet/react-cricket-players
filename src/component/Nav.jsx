
import React from 'react';
import PropTypes from 'prop-types';
import picture from "../assets/logo.png"
import { FaCoins } from "react-icons/fa6";



const Nav = ({coin}) => {
    return (
        <div className='sticky top-0 z-30'>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <img src={picture}></img>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 items-center">
                    <li><a className='text-[#131313B3] font-bold'>Home</a></li>
                    <li><a className='text-[#131313B3] font-bold'>Fixture</a></li>
                    <li><a className='text-[#131313B3] font-bold'>Terms</a></li>
                    <li><a className='text-[#131313B3] font-bold'>Schedules</a></li>
                    <button className="btn btn-outline font-bold">{coin} Coin <FaCoins style={{color:"green"}}></FaCoins></button>

                    
                    </ul>
                </div>
                </div>
            
        </div>
    );
};

Nav.propTypes = {
    
};

export default Nav;