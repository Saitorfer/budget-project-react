import { useState } from 'react'
import Header from "./components/Header";
import Modal from "./components/Modal"
import ListSpends from "./components/ListSpends"
import IconNewSpend from "./img/nuevo-gasto.svg"
//we dont need to put the file name because we named it index
import { generateId } from "./helpers"


function App() {

  const [budget,setBudget] = useState(0);
  const [isValidBudget,setIsValidBudget]=useState(false);
  const [modal, setModal] = useState(false);

  const[animateModal,setAnimateModal]=useState(false);
  const[spends,setSpends]=useState([]);

  const handleNewSpend = () =>{
    setModal(true);
    //I make the modal with a little time before he show the information
    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  }

  const saveSpends = (spend) => {
    spend.id = generateId();
    spend.date=Date.now();
    setSpends([...spends,spend]);
  }


  return (
    //this condition is so that the modal is not cut off at the top 
    <div className={modal ? "fijar":""}>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      
    {isValidBudget ? (
      //if the budget is not valid it show nothing
      <>
        <main>
          <ListSpends
            spends={spends}
          />
        </main>
        <div className="nuevo-gasto">
        <img src={IconNewSpend}
              alt="Icon new spend"
              onClick= {handleNewSpend}/>
        </div>
      </>
    ): null}

    {modal ? (
      <Modal
        setModal={setModal}
        animateModal={animateModal}
        setAnimateModal={setAnimateModal}
        saveSpends={saveSpends}
      />
    ): null}
    

    </div>
  )
}

export default App
