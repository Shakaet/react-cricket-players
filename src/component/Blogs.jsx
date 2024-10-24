import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Blog from './Blog';

const Blogs = ({handleChoosePlayer}) => {

    let [data,setData]=useState([])


    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])

    
    return (
        <div>

           <h1 className='text-3xl text-[#131313] font-bold'>Available Players</h1>

            <div className='grid grid-cols-2 gap-5 md:grid-cols-3 justify-center mt-5'>
            {
                data.map(item=><Blog data={item} handleChoosePlayer={handleChoosePlayer}></Blog>)
            }
            </div>
            
        </div>
    );
};

Blogs.propTypes = {
    
};

export default Blogs;