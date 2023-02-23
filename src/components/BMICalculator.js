import React from "react";

function BMICalculator() {




    return (
        <div id="bmicalculatordiv">
            <h1>BMI Calculator</h1>
            <input     // form could be suitable here in order to submit this data to a backend but for starters lets do an input coz our backend doesn’t hv provision for BMI data
                type="text"
                // onChange={(e) => setHeight(e.target.value)}
                placeholder="Height in cm"
            />
            <input
                type="text"
                // onChange={(e) => setWeight(e.target.value)}
                placeholder="Weight in kg"
            />
            <button >Calculate</button>
            {/* onClick={handleBmi} */}
            <h1>display bmi value</h1>
            <h2>display Obese,healthy etc</h2>
        </div>
    )
}

export default BMICalculator