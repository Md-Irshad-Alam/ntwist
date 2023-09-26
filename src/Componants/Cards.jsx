import React from 'react'
import style from './Styles/Card.module.css'
function Cards() {
  return (
    <div className={style.container}>
        {/* card one element  */}
        <div className={style.innerbody}>
            <div className={style.titlebody}>
                <h1>Mine-To-Mill-To-Mine Optimization</h1>
                <div className={style.content}>
                    <p>NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies,
                         and correct resource models and production plans.</p>
                         <button className={style.btn}>Read More</button>
                </div>
            </div>
            <img src="https://ntwist.com/wp-content/uploads/2023/01/iStock-1339284457-2048x1365.jpg" className={style.cardimg} alt=""  />
        </div>
        {/* Card 2 implementations start */}
        <div className={style.innerbody}>
        <img src="https://ntwist.com/wp-content/uploads/2021/12/iStock-1284372575.jpg" className={style.cardimg} alt=""  />
            <div className={style.titlebody}>
                <h1>Mine-To-Mill-To-Mine Optimization</h1>
                <div className={style.content}>
                    <p>NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies,
                         and correct resource models and production plans.</p>
                         <button className={style.btn}>Read More</button>
                </div>
            </div>
            
        </div>
        {/* card 3 implementation start */}
        <div className={style.innerbody}>
            <div className={style.titlebody}>
                <h1>Mine-To-Mill-To-Mine Optimization</h1>
                <div className={style.content}>
                    <p>NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies,
                         and correct resource models and production plans.</p>
                         <button className={style.btn}>Read More</button>
                </div>
            </div>
            <img src="https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg" className={style.cardimg} alt=""  />
        </div>
        {/* card 4 implementation start */}
        <div className={style.innerbody}>
        <img src="https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png" className={style.cardimg} alt=""  />
            <div className={style.titlebody}>
                <h1>Mine-To-Mill-To-Mine Optimization</h1>
                <div className={style.content}>
                    <p>NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies,
                         and correct resource models and production plans.</p>
                         <button className={style.btn}>Read More</button>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Cards
