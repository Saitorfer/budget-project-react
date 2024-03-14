import { useEffect, useState } from 'react'
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

  const[editSpend,setEditSpend]=useState([]);

  //to know if we edit a spend, open the modal
  useEffect(() => {
    if( Object.keys(editSpend).length > 0 ){
      setModal(true);
      //I make the modal with a little time before he show the information
      setTimeout(() => {
      setAnimateModal(true);
    }, 500);
    }
  },[ editSpend ])


  const handleNewSpend = () =>{
    setModal(true);
    //restart the modal content after edit 
    setEditSpend({});
    //I make the modal with a little time before he show the information
    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  }

  const saveSpends = (spend) => {
    //if there is alredy an id, edit, else, create
    if(spend.id){
    //UPDATE
    const actualSpendsUpdated=spends.map( spendState => spendState.id === 
      spend.id ? spend : spendState)
    
    setSpends(actualSpendsUpdated);

    //clean edit if we close the modal
    setEditSpend({});

    }else{
    //CREATE
    spend.id = generateId();
    spend.date=Date.now();
    setSpends([...spends,spend]);

    }
    
  }

  const deleteSpend = (id) => {
  //DELETE
  const actualSpendsUpdated = spends.filter( spend => spend.id !== id );
  setSpends(actualSpendsUpdated);
    
  }


  return (
    //this condition is so that the modal is not cut off at the top 
    <div className={modal ? "fijar":""}>
      <Header
        spends={spends}
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
            setEditSpend={setEditSpend}
            deleteSpend={deleteSpend}
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
        editSpend={editSpend}
        setEditSpend={setEditSpend}
      />
    ): null}
    

    </div>
  )
}

export default App
