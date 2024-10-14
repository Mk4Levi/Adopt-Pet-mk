import { useState } from "react";
import Modal from "react-modal";
import { ToastContainer, Bounce } from "react-toastify";
import { ShowToast } from "../../components";
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

function TaskModal() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal(e) {
    subtitle.style.color = "white";
    e.preventDefault();

    ShowToast("Link Saved !!");
    console.log(link);
    setTimeout(() => {
      setIsOpen(false);
    }, 700);
  }

  function closeModal() {
    setIsOpen(false);
    // ShowToast("Link Removed !!");
  }

  const [link, setLink] = useState();

  const handleInputChange = (event) => {
    const { id, value } = event.target;

    if (id === "link") setLink(value);
  };

  return (
    <div>
      <ToastContainer transition={Bounce} />
      <div onClick={openModal} className="action-btn">
        Action
      </div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        portalClassName={"ReactModalPortal"}
        className={"ReactModal__Content"}
        overlayClassName={"ReactModal__Overlay"}
        ariaHideApp={false}
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Enter Link</h2>

        <form onSubmit={(e) => afterOpenModal(e)} className="modal-form">
          <div className="task-modal-inputs">
            <input
              id="link"
              value={link}
              onChange={handleInputChange}
              placeholder="Link..."
              type="url"
              required
            />
          </div>
          <br />
          <button>Save Link</button>
          <button onClick={closeModal}>Close</button>
        </form>
      </Modal>
    </div>
  );
}

export default TaskModal;
