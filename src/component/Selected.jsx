import React from 'react';
import PropTypes from 'prop-types';
import { MdDelete } from "react-icons/md";
import Blogs from './Blogs';

const Selected = ({takaData,handleAddMoreBtn,toggle}) => {

    

    

    return (
        <div>
            <h1 className='text-3xl text-[#131313] font-bold'>Selected Players {takaData.length}/6</h1>


            {
                takaData.map((item, index) => (
                    <div key={index}>

                        <div className='mt-10 flex justify-between shadow-lg p-3'>


                            <div className='flex gap-5 items-center'>
                                <div>

                                <img className='w-14 rounded-full' src={item.image} alt={item.name || "Image"} /> 

                                </div>


                                <div>

                                <h3 className='font-bold'>{item.name}</h3>
                                <p className='font-bold'>{item.role}</p>

                                </div>


                            </div>
                              

                            <div>

                            <button className='text-3xl'><MdDelete /></button>

                            </div>
                        </div>
                    
                    </div>
                ))
                }

<button onClick={()=>handleAddMoreBtn()} className="btn btn-outline bg-warning text-black mt-5 ms-2">Add More Player</button>

{
   toggle && <Blogs></Blogs>
}
            
        </div>
    );
};

Selected.propTypes = {
    
};

export default Selected;