import { useState } from 'react'
import Header from "./components/Header";
import IconNewSpend from "./img/nuevo-gasto.svg"
import Modal from "./components/Modal"

function App() {

  const [budget,setBudget] = useState(0);
  const [isValidBudget,setIsValidBudget]=useState(false);
  const [modal, setModal] = useState(false);

  const[animateModal,setAnimateModal]=useState(false);

  const handleNewSpend = () =>{
    setModal(true);
    //I make the modal with a little time before he show the information
    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  }

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      
    {isValidBudget ? (
      //if the budget is not valid it show nothing
      <div className="nuevo-gasto">
      <img src={IconNewSpend}
            alt="Icon new spend"
            onClick= {handleNewSpend}/>
      </div>
    ): null}

    {modal ? (
      <Modal
        setModal={setModal}
        animateModal={animateModal}
        setAnimateModal={setAnimateModal}
      />
    ): null}
    

    </div>
  )
}

export default App
