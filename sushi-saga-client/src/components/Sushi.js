import React, { Fragment } from 'react'

const Sushi = ({sushi, eaten, eat}) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => eat(sushi)}>
        { eaten === true ? null : <img src={sushi.img_url} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price} - {sushi.id}
      </h4>
    </div>
  )
}

export default Sushi