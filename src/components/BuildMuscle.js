import React, { useEffect } from 'react'

function BuildMuscle() {
  useEffect(()=>{
    fetch("url")
    .then(res =>  res.json())
    .then(data =>(data))
})
  return (
    <div>
      <h2>Build Muscle</h2>
      <p>This page will provide tips and advice for building muscle.</p>
    </div>
  )
}

export default BuildMuscle;
