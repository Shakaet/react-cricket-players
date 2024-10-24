
import { useState } from 'react'
import './App.css'
import Banner from './component/Banner'
import Nav from './component/nav'
import Menu from './component/menu'

function App() {

  let [coin,setCoin]=  useState(0)
  let[toggle,setToggle]=useState(true)
  let[takaData,settakeData]=useState([])


  let handleChoosePlayer=(data)=>{

    if(coin>=data.biddingPrice){

      coin= coin-data.biddingPrice
      setCoin(coin)
      let newArr=[...takaData,data]
      settakeData(newArr)
    }
    else{
      alert("you have no sufficient money")
    }

  }
  


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
     <Menu handleAvailableBtn={handleAvailableBtn}handleSelectedBtn={handleSelectedBtn}toggle={toggle}handleChoosePlayer={handleChoosePlayer}takaData={takaData}></Menu>

     </div>
      

      
      
    </div>
      
    </>
  )
}

export default App
