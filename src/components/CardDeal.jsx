import React from 'react'
// import card from '../../Needed/satellite.png'
import card from '../assets/farmer.webp'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Artificial Intelligence <br className='sm:block hidden'/>in Agriculture.</h2>
        {/* <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our model is well trained upon satellite imagery of crop fields of all types with respect to climatic changes as well to give insights on the crops growth and fields.
        </p> */}
        <ul className={`${styles.paragraph} max-w-[470px] mt-5`} style={{listStyleType: 'disc'}}>
          <li>Imagine the combination of the hottest and the biggest sector on our planet!</li>
          <li>Our state of the art AI model is capable of providing solution for any problem related to agriculture.</li>
          <li>The insights from our satelite system is also accessed by our ML model.</li>
          <li>Simple, precise and to the point solutions.</li>
        </ul>
        
        {/* <Button styles='mt-10'/> */}
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
