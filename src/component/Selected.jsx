import React from 'react'
import { MdDelete } from "react-icons/md"

const Selected = ({ takaData, handleAddMoreBtn, handleDelete }) => {
  return (
    <div>
      <h1 className='text-3xl text-[#131313] font-bold'>Selected Players {takaData.length}/6</h1>
      {takaData.map(item => (
        <div key={item.playerId} className='mt-5 flex justify-between shadow-lg p-3'>
          <div className='flex gap-5 items-center'>
            <img className='w-14 rounded-full' src={item.image} alt={item.name} />
            <div>
              <h3 className='font-bold'>{item.name}</h3>
              <p className='font-bold'>{item.role}</p>
              <p className='font-bold'>Price: {item.biddingPrice}</p>
            </div>
          </div>
          <button onClick={() => handleDelete(item.playerId)} className='text-3xl'><MdDelete /></button>
        </div>
      ))}
      <button onClick={handleAddMoreBtn} className="btn btn-outline bg-warning text-black mt-5 ms-2">Add More Player</button>
    </div>
  )
}

export default Selected
