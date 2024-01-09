import React from 'react'
import card from '../../Needed/satellite.png'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Satellite Imagery of Fields <br className='sm:block hidden'/>and climatic action.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our model is well trained upon satellite imagery of crop fields of all types with respect to climatic changes as well to give insights on the crops growth and fields.
        </p>
        <Button styles='mt-10'/>
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
