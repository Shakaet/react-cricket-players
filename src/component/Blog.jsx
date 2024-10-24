import React from 'react';
import PropTypes from 'prop-types';

const Blog = ({data,handleChoosePlayer}) => {



      let {playerId,name,country,image,role,battingType,bowlingType,biddingPrice} = data
    return (
        <div>

<div className="bg-white shadow-md rounded-lg overflow-hidden max-w-xs my-5 py-2 px-2">
      {/* Player Image */}
      <img 
        src={image}
        alt="Virat Kohli"
        className="w-full h-48 object-cover rounded-lg"
      />

      {/* Player Details */}
      <div className="p-4">
        {/* Name and Role */}
        <div className="flex items-center gap-2">
          <div className="bg-gray-200 rounded-full p-2">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A10.004 10.004 0 0012 22a10.004 10.004 0 006.879-4.196M15 11a3 3 0 01-6 0M7 7h10m2 2a2 2 0 11-4 0 2 2 0 114 0z"
              ></path>
            </svg>
          </div>
          <h2 className="text-xl font-semibold">{name}</h2>
        </div>

        {/* Country and Role Badge */}
       <div>
       <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1">
           
            <span className="text-gray-600">{country}</span>
          </div>
          <span className="bg-gray-200 text-sm px-2 py-1 rounded-md">
            {role}
          </span>
        </div>
       </div>
      

        {/* Rating and Batting Style */}
        <div className="mt-4 border-t-2">
          <p className="text-gray-600 font-semibold">Rating</p>
          <div className="md:flex justify-between items-center mt-1 gap-3">
            <p className="text-gray-800 font-bold">{battingType}</p>
            <p className="text-gray-600">{bowlingType}</p>
          </div>
        </div>

        {/* Price and Button */}
        <div className="mt-4 md:flex justify-between items-center gap-2">
          <p className="text-gray-600 font-semibold">
            Price: <span className="text-black font-bold">{biddingPrice}</span>
          </p>
          <button onClick={()=>handleChoosePlayer(data)} className="btn btn-outline">Choose Player</button>
        </div>
      </div>
    </div>

 
            
        </div>
    );
};

Blog.propTypes = {
    
};

export default Blog;