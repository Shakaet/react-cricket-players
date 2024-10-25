import React from 'react'
import Blogs from './Blogs'
import Selected from './Selected'

const Menu = ({ handleAvailableBtn, handleSelectedBtn, toggle, handleChoosePlayer, takaData, handleAddMoreBtn, handleDelete }) => {
  return (
    <div className='mt-10'>
      <div className='flex justify-between'>
        <div></div>
        <div className='flex gap-1'>
          <button onClick={handleAvailableBtn} className={`btn ${toggle ? "bg-warning" : ""}`}>Available</button>
          <button onClick={handleSelectedBtn} className={`btn ${!toggle ? "bg-warning" : ""}`}>Selected ({takaData.length})</button>
        </div>
      </div>

      {toggle ? <Blogs handleChoosePlayer={handleChoosePlayer} /> : <Selected takaData={takaData} handleAddMoreBtn={handleAddMoreBtn} handleDelete={handleDelete} />}
    </div>
  )
}

export default Menu
