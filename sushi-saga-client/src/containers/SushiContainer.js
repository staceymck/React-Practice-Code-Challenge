import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
        {props.sushi.slice(props.sushiIndex, props.sushiIndex + 4).map(sushi => {
          return <Sushi key={sushi.id} sushi={sushi} eat={props.eat} eaten={props.eaten.includes(sushi)} />
        })}
        {props.sushiIndex < 100 ? <MoreButton advance={props.advance} /> : "No more sushi available"}
      </div>
    </Fragment>
  )
}

export default SushiContainer