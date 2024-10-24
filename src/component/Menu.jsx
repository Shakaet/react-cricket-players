import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Blogs from './Blogs';
import Selected from './Selected';

const Menu = ({handleAvailableBtn,handleSelectedBtn,toggle,toggle2}) => {




    return (
        <div>

            <div className='flex justify-between mt-10'>
                <div>
                    <h1 className='text-3xl text-[#131313] font-bold'>Available Players</h1>
                </div>

                <div className='flex gap-1'>
                <button onClick={()=>handleAvailableBtn()} className="btn btn-outline bg-warning text-black">Available</button>
                <button onClick={()=>handleSelectedBtn()} className="btn btn-outline bg-warning text-black">Selected</button>
                </div>
            </div>

            {
                toggle=== true && <Blogs></Blogs>
            }
            {
                toggle=== false && <Selected></Selected>
            }
            
            
        </div>
    );
};

Menu.propTypes = {
    
};

export default Menu;