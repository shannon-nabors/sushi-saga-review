import React, { Fragment } from 'react'

const Sushi = (props) => {
  let {id, img_url, name, price, eaten} = props.sushi
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.eatSushi(id, price)}>
        { eaten ? null : <img src={img_url} width="100%" /> }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi