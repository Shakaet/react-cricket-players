import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Blogs from './Blogs';
import Selected from './Selected';

const Menu = ({handleAvailableBtn,handleSelectedBtn,toggle,handleChoosePlayer,takaData,handleAddMoreBtn,handleDelete}) => {




    return (
        <div>

            <div className='flex justify-between mt-10'>
                <div>
                    
                </div>

                <div className='flex gap-1'>
                <button onClick={() => handleAvailableBtn()} className={`btn ${toggle ? "bg-warning" : ""}`}>Available</button>
                <button onClick={()=>handleSelectedBtn()} className={`btn ${!toggle ? "bg-warning" : ""}`}>Selected ({takaData.length})</button>
                </div>
            </div>

            {
                toggle=== true && <Blogs handleChoosePlayer={handleChoosePlayer}></Blogs>
            }
            {
                toggle=== false && <Selected takaData={takaData} handleAddMoreBtn={handleAddMoreBtn} toggle={toggle} handleDelete={handleDelete}></Selected>
            }
            
            
        </div>
    );
};

Menu.propTypes = {
    
};

export default Menu;