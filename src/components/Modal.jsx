import {useState} from 'react'
import Message from "./Message"
import CloseModalBtn from "../img/cerrar.svg";
const Modal = ({setModal,animateModal,setAnimateModal,saveSpends}) => {

    const [message, setMessage] = useState("");
    const[name,setName]=useState("");
    const[amount,setAmount]=useState(0);
    const[category,setCategory]=useState("");


  const closeModal = () => {
        setAnimateModal(false);
        //animation to close
        //why modal and not animateModal? because we need 
        //the modal open to see the transition, the animate is already to false
        setTimeout(() => {
            setModal(false);
        }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //includes verify that all the fields are not equals to ""
    //we also can use name==="" || etc...
    if([name,amount,category].includes("")){
        setMessage("All fields are required!");
        //make the message dissapear
        setTimeout(() => {
            setMessage("");
        }, 2000);
        return;
    }

    saveSpends({name,amount,category});
    closeModal();
  } 




  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CloseModalBtn} alt="Close Modal" onClick={closeModal} />
      </div>
    
      <form 
        onSubmit={handleSubmit}
        className={`formulario ${animateModal?"animar":"cerrar"}`}>
        <legend>New Spend</legend>
        {message && <Message typeM="error">{message}</Message>}
        <div className="campo">
            <label htmlFor="name">Name of Spend</label>
            <input
                id="name"
                type="text"
                placeholder="Add the name of the spend"
                value={name}
                onChange={ e => setName(e.target.value)}
            />
        </div>

        <div className="campo">
            <label htmlFor="amount">Amount of Spend</label>
            <input
                id="amount"
                type="number"
                placeholder="Add the amount of the spend"
                value={amount}
                onChange={ e => setAmount(Number(e.target.value))}
            />
        </div>

        <div className="campo">
            <label htmlFor="category">Category</label>
            <select id="category"
                //It gonna read the value of options!
                value={category}
                onChange={ e => setCategory(e.target.value)}>
                    
                <option value="">-- Select a category --</option>
                <option value="savings">Savings</option>
                <option value="food">Food</option>
                <option value="house">House</option>
                <option value="miscellaneous">Miscellaneous</option>
                <option value="health">Health</option>
                <option value="savings">Savings</option>
                <option value="subscription">Subscription</option>
            </select>
        </div>
        
        <input
            type="submit"
            value="Add Spend"
        />


      </form>
    </div>
  );
};

export default Modal;
