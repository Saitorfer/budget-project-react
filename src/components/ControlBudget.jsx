import { useState, useEffect } from 'react'


const ControlBudget = ({spends, budget}) => {

    const [available,setAvailable] = useState(0);
    const [spended,setSpended] = useState(0);

    useEffect(()=>{
      const totalSpended = spends.reduce( (total, spend ) => spend.amount + total, 0);
      const totalAvailable = budget - totalSpended;

      setSpended(totalSpended);
      setAvailable(totalAvailable);

    },[spends])

    //format to euros
    const formatBudgetToEuros = (amount) =>{
        return amount.toLocaleString('en-US',{
            style: 'currency',
            currency: 'EUR'
        })
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica</p>
      </div>
      <div className="contenido-presupuesto">
            <p>
                <span>Budget: </span> {formatBudgetToEuros(budget)}
            </p>
            <p>
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
