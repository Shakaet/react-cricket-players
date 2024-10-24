
import { useState } from 'react'
import './App.css'
import Banner from './component/Banner'
import Nav from './component/nav'
import Menu from './component/menu'
import Footer from './component/footer'

function App() {

  let [coin,setCoin]=  useState(0)
  let[toggle,setToggle]=useState(true)
  let[takaData,settakeData]=useState([])


  let handleDelete=(playerId)=>{
    let withoutDelete= takaData.filter(item=>item.playerId !== playerId)
    
    settakeData(withoutDelete)
  }


  let handleChoosePlayer=(data)=>{


    let repeat= takaData.find(item=>item.playerId=== data.playerId)

    if(coin>=data.biddingPrice && takaData.length<6 && !repeat){

      coin= coin-data.biddingPrice
      setCoin(coin)
      let newArr=[...takaData,data]
      settakeData(newArr)
    }
    else{
      alert("you can not add players")
    }

  }
  


  let handleAvailableBtn=()=>{

    setToggle(true)



  }
  let handleSelectedBtn=()=>{
    
    setToggle(false)



  }

  let handleAddMoreBtn=()=>{
    setToggle(true)
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
     <Menu handleAvailableBtn={handleAvailableBtn}handleSelectedBtn={handleSelectedBtn}toggle={toggle}handleChoosePlayer={handleChoosePlayer}takaData={takaData} handleAddMoreBtn={handleAddMoreBtn} handleDelete={handleDelete}></Menu>
     <Footer></Footer>

     </div>
      

      
      
    </div>
      
    </>
  )
}

export default App
