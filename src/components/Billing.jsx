import React from 'react'
import { google } from '../assets'
import model from '../assets/satellite.webp'
// import model from '../../Needed/model.png'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={model}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Satellite based <br className='sm:block hidden'/> Field Monitoring.</h2>
        {/* <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our AI engine model is trained on Package of Practice data on major crops to give end to end solution about any issue regarding growth and yield with respect to satellite data and weather as well.
        </p> */}
        <ul className={`${styles.paragraph} max-w-[470px] mt-5`} style={{listStyleType: 'disc'}}>
          <li>Get every detail possible about your farm with our satellite technology!!</li>
          <li>Accurate disease detection, crop yield monitoring, hydration monitoring </li>
          <li>Our satellite based technology gives a 5x5 accurate of the farm field.</li>
          <li>New age techniques like NDVI, NDWI, SLIA are used to process the farm image.</li>
        </ul>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          {/* <img
            src={apple}
            alt='app-store'
            className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
          /> */}
          <a href='https://play.google.com/store/apps/details?id=com.rootskartv2' target='_blank'>
          <img
            src={google}
            alt='google-play'
            className='w-[128px] h-[42px] object-contain cursor-pointer'
          />
          </a>
        </div>
      </div>  
    </section>
  )
}

export default Billing
