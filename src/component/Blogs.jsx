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

            <h1>Hello Blogs</h1>

            <div className='grid md:grid-cols-3 justify-center'>
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