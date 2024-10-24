import React from 'react';
import PropTypes from 'prop-types';
import picture from "../assets/banner-main.png"

const Banner = ({handleCoin}) => {
    return (
        <div className=''>
            <div className="hero bg-gradient-to-r from-black to-black via-black min-h-screen rounded">
            <div className="hero-content text-center">
                <div className="max-w-lg ms-10 w-full">
                <img className='w-80 mx-auto' src={picture}></img>
                <h2 className='text-3xl text-[#FFFFFF] font-bold mt-5'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p className='text-[#FFFFFFB3] mt-3 font-bold'>Beyond Boundaries Beyond Limits</p>
                
                <button onClick={()=>handleCoin()} className="btn bg-[#E7FE29] mt-5">Claim Free Credit</button>
                </div>
            </div>
            </div>
            
        </div>
    );
};

Banner.propTypes = {
    
};

export default Banner;