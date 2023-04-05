import React from 'react'
import s from './Rating.module.css'

const  Rating = ({rating}) => {
  return (
    <div className={s.star_ratings}>
        <div style={{width:rating + "%"}}  className={s.stars}>★★★★★</div>
    </div>
  )
}

export default Rating