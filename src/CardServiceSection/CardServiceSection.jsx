import React from 'react'
import "./Style.css";



function CardServiceSection(props) {
  return (
    <div className='card-containair'>
<div style={{
          color: props.color,
          backgroundColor: props.bgColor,
          width: props.width,
        }} className='card'>
<img src={props.img} alt="" />
<h6>{props.content}</h6>
<h5>{props.titlle}</h5>
<div className='plus-btn'>
{props.plus}
</div>

</div>
    </div>
  )
}

export default CardServiceSection