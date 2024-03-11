import CloseModalBtn from "../img/cerrar.svg";

const Modal = ({setModal,animateModal,setAnimateModal}) => {

  const closeModal = () => {
        setAnimateModal(false);
        //animation to close
        //why modal and not animateModal? because we need 
        //the modal open to see the transition, the animate is already to false
        setTimeout(() => {
            setModal(false);
        }, 500);
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CloseModalBtn} alt="Close Modal" onClick={closeModal} />
      </div>
    
      <form className={`formulario ${animateModal?"animar":"cerrar"}`}>
        <legend>New Spend</legend>
        <div className="campo">
            <label htmlFor="name">Name of Spend</label>
            <input
                id="name"
                type="text"
                placeholder="Add the name of the spend"
            />
        </div>

        <div className="campo">
            <label htmlFor="amount">Amount of Spend</label>
            <input
                id="amount"
                type="number"
                placeholder="Add the amount of the spend"
            />
        </div>

        <div className="campo">
            <label htmlFor="category">Category</label>
            <select id="category">
                    
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
