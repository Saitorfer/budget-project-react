import { useState, useEffect } from 'react'
import Message from "./Message"
import CloseModalBtn from "../img/cerrar.svg";
const Modal = ({ setModal, animateModal, setAnimateModal, saveSpends, editSpend , setEditSpend}) => {

  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date,setDate]=useState("");
  const [id,setId] =useState("");

  useEffect(() => {
    //with this code we know if its a new spend or if we edit one
    if( Object.keys(editSpend).length > 0 ){
      setName(editSpend.name);
      setAmount(editSpend.amount);
      setCategory(editSpend.category);
      setId(editSpend.id)
      setDate(editSpend.date);
    }

  }, [])


  const closeModal = () => {
    setAnimateModal(false);
    //clean edit if we close the modal
    setEditSpend({});
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
    if ([name, amount, category].includes("")) {
      setMessage("All fields are required!");
      //make the message dissapear
      setTimeout(() => {
        setMessage("");
      }, 2000);
      return;
    }

    saveSpends({ name, amount, category, id, date });
    closeModal();
  }




  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CloseModalBtn} alt="Close Modal" onClick={closeModal} />
      </div>

      <form
        onSubmit={handleSubmit}
        className={`formulario ${animateModal ? "animar" : "cerrar"}`}>
        <legend>{editSpend.name ? "Edit Spend" : "New Spend"}</legend>
        {message && <Message typeM="error">{message}</Message>}
        <div className="campo">
          <label htmlFor="name">Name of Spend</label>
          <input
            id="name"
            type="text"
            placeholder="Add the name of the spend"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="amount">Amount of Spend</label>
          <input
            id="amount"
            type="number"
            placeholder="Add the amount of the spend"
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor="category">Category</label>
          <select id="category"
            //It gonna read the value of options!
            value={category}
            onChange={e => setCategory(e.target.value)}>

            <option value="">-- Select a category --</option>
            <option value="savings">Savings</option>
            <option value="food">Food</option>
            <option value="house">House</option>
            <option value="miscellaneous">Miscellaneous</option>
            <option value="health">Health</option>
            <option value="entertainment">Entertainment</option>
            <option value="subscription">Subscription</option>
          </select>
        </div>

        <input
          type="submit"
          value={editSpend.name ? "Edit Spend" : "Add Spend"}
        />


      </form>
    </div>
  );
};

export default Modal;
