import { useState } from "react";
import Modal from "react-modal";
import { ToastContainer, Bounce } from "react-toastify";
import { ShowToast } from "../../components/ToastAlert";
import "../css/modal.css";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
  },
  content: {
    top: "26%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflow: "auto",
    outline: "none",
  },
};

const IdeaItem = ({ id, description, status }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    ShowToast("Idea Removed !!");
    setTimeout(() => {
      setIsOpen(false);
    }, 700);
  }

  function closeModal() {
    // ShowToast("Closed !!");
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  }

  let date = new Date();
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yy = date.getFullYear();

  return (
    <>
      <ToastContainer transition={Bounce} />
      <div onClick={openModal} className="idea-row">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          portalClassName={"ReactModalPortal"}
          className={"ReactModal__Content"}
          overlayClassName={"ReactModal__Overlay"}
          ariaHideApp={false}
        >
          <div className="modal-form idea-modal">
            <div className="modal-header">
              <div>ID :- idea-{id}</div>
              <div>
                {dd} - {mm} - {yy}
              </div>
            </div>

            <div className="modal-content">
              <h2>
                <b className="desc-title">Description</b>
              </h2>
              <div>{description}</div>
              <br />
            </div>

            <div className="modal-btns">
              <button onClick={afterOpenModal}>Remove</button>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        </Modal>
        <div className="idea-desc">{description}</div>
        <div className="idea-status">{status}</div>
      </div>
    </>
  );
};

export default IdeaItem;
