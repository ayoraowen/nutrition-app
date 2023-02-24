import React, { useState } from "react";

const Bmi = () => {
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const handleBmi = () => {
    let val = (
      [Number(weight) / (Number(height) * Number(height))] * 10000
    ).toFixed(1);
    setBmi(val);
    if (val < 18.5) {
      setInfo("you are UNDER WEIGHT , please check on how to gain weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("you are HEALTHY , keep it up!!! You may consider building muscles");
    } else if (val > 24.9 && val < 30) {
      setInfo("you are OVERWEIGHT , Please check on how to lose weight");
    } else {
      setInfo("you are an OBESE, eat healthy, reduced-calorie diet and exercise regularly ");
    }
  };
  return (
    <div>
      <h4>BMI Calculator</h4>
      <input
        type="text"
        onChange={(e) => setHeight(e.target.value)}
        placeholder="height in cm"
      />
      <input
        type="text"
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Weight in kg"
      />
      <button onClick={handleBmi}>Calculate</button>
      <h4>{bmi}</h4>
      <h4>{info}</h4>
    </div>
  );
};

export default Bmi;