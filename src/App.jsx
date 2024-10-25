import { useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Banner from './component/Banner'
import Nav from './component/Nav'
import Menu from './component/Menu'
import Footer from './component/Footer'

function App() {
  let [coin, setCoin] = useState(0)
  let [toggle, setToggle] = useState(true)
  let [takaData, settakeData] = useState([])

  let handleDelete = (playerId) => {
    let withoutDelete = takaData.filter(item => item.playerId !== playerId)
    settakeData(withoutDelete)
    toast.success("Player removed successfully!")
  }

  let handleChoosePlayer = (data) => {
    let repeat = takaData.find(item => item.playerId === data.playerId)

    if (coin >= data.biddingPrice && takaData.length < 6 && !repeat) {
      setCoin(coin - data.biddingPrice)
      let newArr = [...takaData, data]
      settakeData(newArr)
      toast.success("Player added successfully!")
    } else {
      toast.error("You cannot add players!")
    }
  }

  let handleAvailableBtn = () => {
    setToggle(true)
  }

  let handleSelectedBtn = () => {
    setToggle(false)
  }

  let handleAddMoreBtn = () => {
    setToggle(true)
  }

  let handleCoin = () => {
    setCoin(coin + 50000)
    toast.success("Coin added!")
  }

  return (
    <>
      <div>
        <div className='max-w-full mx-auto overflow-x-hidden'>

          <Nav coin={coin} />
          <Banner handleCoin={handleCoin} />
          <Menu 
            handleAvailableBtn={handleAvailableBtn}
            handleSelectedBtn={handleSelectedBtn}
            toggle={toggle}
            handleChoosePlayer={handleChoosePlayer}
            takaData={takaData}
            handleAddMoreBtn={handleAddMoreBtn}
            handleDelete={handleDelete}
          />
          <Footer />
        </div>

        <ToastContainer />
      </div>
    </>
  )
}

export default App
