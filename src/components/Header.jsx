import React from "react";
import NewBudget from "./NewBudget";
import ControlBudget from "./ControlBudget";
const Header = ({ spends,setSpends, budget, setBudget, isValidBudget, setIsValidBudget }) => {
  
  return (
    <header>
      <h1> Budget planning </h1>
      {isValidBudget ? (
        <ControlBudget 
          spends={spends}
          setSpends={setSpends}
          budget={budget} 
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />

      ) : (
        <NewBudget 
          budget={budget} 
          setBudget={setBudget} 
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  );

};

export default Header;
