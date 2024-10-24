
import { useState } from 'react'
import './App.css'
import Banner from './component/Banner'
import Nav from './component/nav'
import Menu from './component/menu'

function App() {

  let [coin,setCoin]=  useState(0)



  let handleCoin=()=>{

    setCoin(coin+50000)

  

  }


  return (
    <>
    <div>
     <div className='max-w-full mx-auto'>
     <Nav coin={coin}></Nav>
     <Banner handleCoin={handleCoin}></Banner>
     <Menu></Menu>

     </div>
      

      
      
    </div>
      
    </>
  )
}

export default App
