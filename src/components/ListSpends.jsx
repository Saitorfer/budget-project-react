import React from 'react'
import Spend from "./Spend"

const ListSpends = ({spends,setEditSpend,deleteSpend}) => {
  return (
    <div className="listado-gastos contenedor">
        <h2>{spends.length > 0 ? "Spends" : "There is no spends yet"}</h2>
        
        {spends.map ( (spend) => (
            <Spend 
                key={spend.id}
                spend={spend}
                setEditSpend={setEditSpend}
                deleteSpend={deleteSpend}
            />
        ))}

    </div>
  )
}

export default ListSpends
