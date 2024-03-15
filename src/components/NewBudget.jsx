import { useState } from "react";
import Message from "./Message"

const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {

  const [message, setMessage] = useState('');

  //this is the controler of what is enter in the input
  const handleBudget = (e) => {
    e.preventDefault();

    //be sure iits not negative
    if (Number(budget) < 0) {
      setMessage("Not a valid budget");
      setIsValidBudget(false);
      //break the cycle of this function
      return;
    }
    //if the input is correct set the message to ''
    setMessage('');
    setIsValidBudget(true);



  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handleBudget} className="formulario">
        <div className="campo">
          <label> Define a Budget </label>
          <input
            className="nuevo-presupuesto"
            //just permit to write numbers
            type="number"
            placeholder="Add your budget here!"
            value={budget}
            //set the buidget and convert it to Number
            onChange={(e) => setBudget(Number(e.target.value))}
          />
        </div>
        <input type="submit" value="Add" />
        {message && <Message typeM="error">{message}</Message>}
      </form>
    </div>
  );
};

export default NewBudget;
