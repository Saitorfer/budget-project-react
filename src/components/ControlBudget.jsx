import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const ControlBudget = ({ spends, setSpends, budget, setBudget, setIsValidBudget }) => {

  const [available, setAvailable] = useState(0);
  const [spended, setSpended] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const totalSpended = spends.reduce((total, spend) => spend.amount + total, 0);
    const totalAvailable = budget - totalSpended;

    // calculate percentage 
    //the toFixed to get the .00
    const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(2)

    setSpended(totalSpended);
    setAvailable(totalAvailable);

    //to animate a little later, we get a cool effect
    setTimeout(() => {
      setPercentage(newPercentage);
    }, 800);

  }, [spends])

  //format to euros
  const formatBudgetToEuros = (amount) => {
    return amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'EUR'
    })
  }

  const handleResetApp = () => {

    const result = confirm("Did you want to reset your budget?")
    if (result) {
      setSpends([]);
      setBudget(0);
      setIsValidBudget(false);
    }

  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          //change color
          styles={buildStyles({
            pathColor: percentage > 100 ? "#DC2626" : "#3B82F6",
            trailColor: "#F5F5F5",
            textColor: percentage > 100 ? "#DC2626" : "#3B82F6"
          })}
          value={percentage}
          text={`${percentage}% Spended`}
        />
      </div>
      <div className="contenido-presupuesto">
        <button
          className="reset-app"
          type="button"
          onClick={handleResetApp}>
          Reset Budget
        </button>
        <p>
          <span>Budget: </span> {formatBudgetToEuros(budget)}
        </p>
        <p className={`${available < 0 ? "negativo" : ""}`} >
          <span>Avaible: </span> {formatBudgetToEuros(available)}
        </p>
        <p>
          <span>Spended: </span> {formatBudgetToEuros(spended)}
        </p>
      </div>
    </div>
  )
}

export default ControlBudget
