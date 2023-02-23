import React, { useEffect, useState } from 'react'

function GainWeight() {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch('url')
      .then(res => res.json())
      .then(data => setTips(data))
  }, []);

  return (
    <div>
      <h2>Gain Weight</h2>
      <p>Here are some tips for gaining weight:</p>
      <ul>
        {tips.map(tip => <li key={tip.id}>{tip.title}</li>)}
      </ul>
    </div>
  )
}

export default GainWeight;
