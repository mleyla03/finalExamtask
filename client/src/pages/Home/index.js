import React from 'react'
import Card from '../Card'
import Data from '../Data'
import Style from "./index.module.css"
import { Helmet } from 'react-helmet'
const Home = () => {
  return (
   <>
      <Helmet>
          
          <title>Add</title>
       
      </Helmet>
   <div className={Style.home}>
    <div className={Style.homes}>
        <p>Men New-Season</p>
        <h1>Jackects & Coats</h1>
        <button>Shop Now</button>
    </div>
   </div>
   <Card/>
   <Data/>
   </>
  )
}

export default Home