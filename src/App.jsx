
import { useState } from 'react'
import './App.css'
import Banner from './component/Banner'
import Nav from './component/nav'
import Menu from './component/menu'

function App() {

  let [coin,setCoin]=  useState(0)
  let[toggle,setToggle]=useState(true)
  


  let handleAvailableBtn=()=>{

    setToggle(true)



  }
  let handleSelectedBtn=()=>{
    
    setToggle(false)



  }



  let handleCoin=()=>{

    setCoin(coin+50000)

  

  }


  return (
    <>
    <div>
     <div className='max-w-full mx-auto'>
     <Nav coin={coin}></Nav>
     <Banner handleCoin={handleCoin}></Banner>
     <Menu handleAvailableBtn={handleAvailableBtn}handleSelectedBtn={handleSelectedBtn}toggle={toggle}></Menu>

     </div>
      

      
      
    </div>
      
    </>
  )
}

export default App
