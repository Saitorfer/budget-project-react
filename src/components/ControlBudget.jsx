import React from 'react'

const ControlBudget = ({budget}) => {

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
                <span>Avaible: </span> {formatBudgetToEuros(0)}
            </p>
            <p>
                <span>Spend: </span> {formatBudgetToEuros(0)}
            </p>
      </div>
    </div>
  )
}

export default ControlBudget
