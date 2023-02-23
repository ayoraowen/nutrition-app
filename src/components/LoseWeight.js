import React, {useEffect} from 'react'

function LoseWeight() {
useEffect(()=>{
    fetch("url")
    .then(res =>  res.json())
    .then(data =>(data))
})
  return (
    <div>LoseWeight</div>
  )
}

export default LoseWeight;