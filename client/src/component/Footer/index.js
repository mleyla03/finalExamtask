import React from 'react'
import { Link } from 'react-router-dom'
import Style from "./index.module.css"
const Footer = () => {
  return (
    <>
    <div className={Style.footer}>
        
        <div className={Style.footertop}>
            <img src='https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-01.png' alt=''/>
            <img src='https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-02.png' alt=''/>
            <img src='https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-03.png' alt=''/>
            <img src='https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-04.png' alt=''/>
            <img src='https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-05.png' alt=''/>
        </div>
        
        <div className={Style.footerbottom}>
            <p>Copyright ©2023 All rights reserved | This template is made with<i class="fa-regular fa-heart"></i> by <Link className={Style.links} to ="/"> Colorlib</Link></p>
        </div>
    </div>
    </>
  )
}

export default Footer