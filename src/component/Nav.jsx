import React from 'react'
import picture from "../assets/logo.png"
import { FaCoins } from "react-icons/fa"

const Nav = ({coin}) => {
  return (
    <div className='sticky top-0 z-30'>
      <div className="navbar bg-base-100 px-4 lg:px-10">
        <div className="flex-1">
          <img src={picture} alt="Logo" className="h-18"/>
        </div>
        <div className="flex-none">
          <ul className="menu md:menu-horizontal px-1 items-center">
            {['Home', 'Fixture', 'Terms', 'Schedules'].map(item => (
              <li key={item}><a className='text-[#131313B3] font-bold'>{item}</a></li>
            ))}
            <button className="btn btn-outline font-bold">{coin} Coin <FaCoins style={{color:"green"}} /></button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav
