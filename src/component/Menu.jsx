import React from 'react';
import PropTypes from 'prop-types';

const Menu = props => {
    return (
        <div>

            <div className='flex justify-between mt-10'>
                <div>
                    <h1 className='text-3xl text-[#131313] font-bold'>Available Players</h1>
                </div>

                <div className='flex gap-1'>
                <button className="btn btn-outline bg-warning text-black">Available</button>
                <button className="btn btn-outline bg-warning text-black">Selected</button>
                </div>
            </div>
            
        </div>
    );
};

Menu.propTypes = {
    
};

export default Menu;