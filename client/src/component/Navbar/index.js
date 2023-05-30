import React from 'react'
import Style from "./index.module.css"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <div className={Style.topheader}>
        <div className={Style.p}><p>Free shipping for standard order over $100</p></div>
        <div className={Style.span}>
            <span>Help & Faqs </span>
            <span>My Acount</span>
            <span>EN</span>
            <span>USD</span>
        </div>
    </div>
    <header>
        <div className={Style.bottomheader}>
            
        <div>
            
             <ul>
                <div className={Style.black}><span>COZA</span>STORE</div>
                <li><Link className={Style.linkp} to="/" >Home</Link></li>
                <li><Link className={Style.links} to ="#">Shop</Link></li>
                <li><Link className={Style.links} to ="#">Feauture</Link></li>
                <li><Link className={Style.links} to ="#">Blog</Link></li>
                <li><Link className={Style.links} to ="#">About</Link></li>
                <li><Link className={Style.links} to ="/add">Add</Link></li>
            </ul>
       </div>
       <div className={Style.iconheader}>
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-cart-shopping"></i>
          <i class="fa-regular fa-heart"></i>
       </div>
        </div>
       
           
        
        
    </header>
    </>
  )
}

export default Navbar