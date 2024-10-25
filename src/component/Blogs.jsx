import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Blog from './Blog';

const Blogs = ({ handleChoosePlayer }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl text-[#131313] font-bold mb-8">Available Players</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.map(item => (
                    <Blog key={item.playerId} data={item} handleChoosePlayer={handleChoosePlayer} />
                ))}
            </div>
        </div>
    );
};

Blogs.propTypes = {
    handleChoosePlayer: PropTypes.func.isRequired,
};

export default Blogs;
