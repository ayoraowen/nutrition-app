import React, { useState } from "react";

const hotText = "LoseWeight";
const url = "https://developer.mozilla.org/";

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
      setInfo("You are UNDER WEIGHT , please explore nutrition requirements on gaining weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("You are HEALTHY , keep it up!!! You may consider building muscles. Explore to learn more");
    } else if (val > 24.9 && val < 30) {
      setInfo(`You are OVERWEIGHT , please explore nutrition requirements on losing weight at ${hotText.link(url)}`);
    } else {
      setInfo("You are OBESE, eat healthy, reduced-calorie diet and exercise regularly. Explore to learn more");
    }
  };
  return (
    <div className="addpaddingtoBMIcalc">
      <h4>BMI Calculator</h4>
      <input
        type="text"
        onChange={(e) => setHeight(e.target.value)}
        placeholder="Enter your height in cm"
      />
      <input
        type="text"
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Enter your weight in kg"
      />
      <button onClick={handleBmi}>Calculate</button>
      <h4>{bmi}</h4>
      <h4>{info}</h4>
    </div>
  );
};

export default Bmi;