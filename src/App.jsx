import { useEffect, useState } from 'react'
import Header from "./components/Header";
import Modal from "./components/Modal"
import ListSpends from "./components/ListSpends"
import IconNewSpend from "./img/nuevo-gasto.svg"
import Filters from "./components/Filters"
//we dont need to put the file name because we named it index
import { generateId } from "./helpers"


function App() {


  const [budget, setBudget] = useState(
    Number(localStorage.getItem("budget")) ?? 0
  );
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [spends, setSpends] = useState(
    localStorage.getItem("spends") ? JSON.parse(localStorage.getItem("spends")) : []
  );
  const [editSpend, setEditSpend] = useState([]);
  const [filter, setFilter] = useState("");
  const [filteredSpends, setFilteredSpends] = useState([]);

  //to know if we edit a spend, open the modal
  useEffect(() => {
    if (Object.keys(editSpend).length > 0) {
      setModal(true);
      //I make the modal with a little time before he show the information
      setTimeout(() => {
        setAnimateModal(true);
      }, 500);
    }
  }, [editSpend])

  //localStorage
  useEffect(() => {
    localStorage.setItem("budget", budget ?? 0)
  }, [budget])

  //localStorage
  useEffect(() => {
    localStorage.setItem("spends", JSON.stringify(spends) ?? [])
  }, [spends])

  // if in the localmemory there is a budget charge the ControlComponent directly
  useEffect(() => {
    const budgetLS = Number(localStorage.getItem("budget")) ?? 0

    if (budgetLS > 0) {
      setIsValidBudget(true);
    }
  }, [])

  useEffect(() => {
    if (filter) {
      const filteredSpends = spends.filter(spend => spend.category === filter)
      setFilteredSpends(filteredSpends);
    }
  }, [filter])

  const handleNewSpend = () => {
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
    if (spend.id) {
      //UPDATE
      const actualSpendsUpdated = spends.map(spendState => spendState.id ===
        spend.id ? spend : spendState)

      setSpends(actualSpendsUpdated);

      //clean edit if we close the modal
      setEditSpend({});

    } else {
      //CREATE
      spend.id = generateId();
      spend.date = Date.now();
      setSpends([...spends, spend]);

    }

  }

  const deleteSpend = (id) => {
    //DELETE
    const actualSpendsUpdated = spends.filter(spend => spend.id !== id);
    setSpends(actualSpendsUpdated);

  }


  return (
    //this condition is so that the modal is not cut off at the top 
    <div className={modal ? "fijar" : ""}>
      <Header
        spends={spends}
        setSpends={setSpends}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget ? (
        //if the budget is not valid it show nothing
        <>
          <main>
            <Filters
              filter={filter}
              setFilter={setFilter}
            />
            <ListSpends
              spends={spends}
              setEditSpend={setEditSpend}
              deleteSpend={deleteSpend}
              filter={filter}
              filteredSpends={filteredSpends}
            />
          </main>
          <div className="nuevo-gasto">
            <img src={IconNewSpend}
              alt="Icon new spend"
              onClick={handleNewSpend} />
          </div>
        </>
      ) : null}

      {modal ? (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          saveSpends={saveSpends}
          editSpend={editSpend}
          setEditSpend={setEditSpend}
        />
      ) : null}


    </div>
  )
}

export default App
