import React from 'react'
import style from './Styles/Footer.module.css'
function Footer() {
  return (
    <div className={style.container}>
        <div className={style.inner}>
           
            <img src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" className={style.logoimg} alt="" />
           
            <div className={style.list}>
                <ul>Home</ul>
                <ul>About Us</ul>
                <ul>Contact Us</ul>
                <ul>Privacy Policy</ul>
                <ul>Sitemap</ul>
            </div>
            <div className={style.address}>
                <p>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
