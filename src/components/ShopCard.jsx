import React from 'react'
import '../style/components/_shopCard.scss'
import { FaStar } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function ShopCard() {
  return (
    <main className='mainOfShopCard'>
      <div>
        <img src="/background.jpg" alt="" />
      </div>
      <div className='price_evaluation'>
        <span className='price'>150 EG</span>
        <span className='evaluation'> <FaStar /> 4.5</span>
      </div>
      <hr />
      <p>Pork Chop with Apple Chutney</p>
      <div>
        <p className='sign'> <IoIosCheckmarkCircleOutline /> 4 Pieces</p>
      </div>
      <div>
        <p className='sign'> <IoIosCheckmarkCircleOutline /> Spicy Sauce</p>
      </div>
    </main>
  )
}
