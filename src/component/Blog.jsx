import React from 'react';
import PropTypes from 'prop-types';

const Blog = ({ data, handleChoosePlayer }) => {
    const { playerId, name, country, image, role, battingType, bowlingType, biddingPrice } = data;

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            {/* Player Image */}
            <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover"
            />

            {/* Player Details */}
            <div className="p-4">
                {/* Name and Role */}
                <div className="flex items-center gap-2 mb-2">
                    <div className="bg-gray-200 p-2 rounded-full">
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
                    <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
                </div>

                {/* Country and Role Badge */}
                <div className="flex items-center justify-between mb-4">
                    <p className="text-gray-600">{country}</p>
                    <span className="bg-gray-200 text-xs px-2 py-1 rounded-md text-gray-600">{role}</span>
                </div>

                {/* Batting and Bowling Types */}
                <div className="border-t pt-2">
                    <p className="text-gray-600 font-semibold mb-1">Rating</p>
                    <div className="flex flex-col md:flex-row justify-between text-sm text-gray-700">
                        <p>{battingType}</p>
                        <p>{bowlingType}</p>
                    </div>
                </div>

                {/* Price and Button */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-2 md:space-y-0">
                    <p className="text-gray-600">
                        Price: <span className="text-gray-900 font-bold">${biddingPrice}</span>
                    </p>
                    <button
                        onClick={() => handleChoosePlayer(data)}
                        className="bg-yellow-500 text-white py-2 px-4 rounded-lg transition-transform transform hover:scale-105"
                    >
                        Choose Player
                    </button>
                </div>
            </div>
        </div>
    );
};

Blog.propTypes = {
    data: PropTypes.shape({
        playerId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        battingType: PropTypes.string.isRequired,
        bowlingType: PropTypes.string.isRequired,
        biddingPrice: PropTypes.number.isRequired,
    }).isRequired,
    handleChoosePlayer: PropTypes.func.isRequired,
};

export default Blog;
