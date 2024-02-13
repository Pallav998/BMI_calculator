import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calculate = (e) => {
    e.preventDefault();
    // BMI Calculation: BMI = weight (kg) / (height (m) * height (m))
    const heightInMeters = height / 100; // converting height to meters
    const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(
      2
    );

    setBmi(calculatedBmi);

    // Determine BMI category
    if (calculatedBmi < 18.5) {
      setMessage("Underweight");
    } else if (calculatedBmi >= 18.5 && calculatedBmi < 25) {
      setMessage("Normal weight");
    } else if (calculatedBmi >= 25 && calculatedBmi < 30) {
      setMessage("Overweight");
    } else {
      setMessage("Obese");
    }
  };

  const handleReload = () => {
    setWeight(0);
    setHeight(0);
    setBmi("");
    setMessage("");
  };

  return (
    <div className="App">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calculate}>
          <div>
            <label>Weight (Kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <button className="btn" type="submit">
            Calculate
          </button>
          <button className="btn" type="button" onClick={handleReload}>
            Reload
          </button>
        </form>
        <div className="center BMI">
          {bmi && <h3>Your BMI is: {bmi}</h3>}
          {message && <p>{`You are ${message}`}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
