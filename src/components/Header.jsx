import React from "react";
import NewBudget from "./NewBudget";
import ControlBudget from "./ControlBudget";
const Header = ({ spends, budget, setBudget, isValidBudget, setIsValidBudget }) => {
  
  return (
    <header>
      <h1> Budget planning </h1>
      {isValidBudget ? (
        <ControlBudget 
          spends={spends}
          budget={budget} 
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
