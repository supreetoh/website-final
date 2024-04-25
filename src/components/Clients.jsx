import React from 'react'
import { clients } from '../constants'
import styles from '../style'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex flex-col px-10 py-12 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img
              src={client.logo}
              alt='client'
              className='sm:w-[192px] w-[100px] object-contain'
            />
            <h4 className='font-poppins pt-5 font-semibold text-[20px] leading-[32px] text-white'>{client.id}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients
