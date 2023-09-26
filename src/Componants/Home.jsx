import React from 'react';
import style from './Styles/Home.module.css'
function Home() {
  return (
    <div className={style.container}>
      <div className={style.innercontainer}>
        <div className={style.content}>
           <div className={style.button}>
            <h1 className={style.header}>Data-powered solutions <br /> for Industrial Excellence</h1>
           <button className={style.btn}>Read more</button>
           </div>
            <img src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png" alt="top img" className={style.img} />
        </div>
      </div>
    </div>
  )
}

export default Home
