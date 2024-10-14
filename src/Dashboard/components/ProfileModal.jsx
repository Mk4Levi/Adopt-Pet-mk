import { useState } from "react";
import Modal from "react-modal";
import { VscVerified } from "react-icons/vsc";
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

function ModalComp() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  const [isVerified, setIsVerified] = useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "white";
  }

  function closeModal() {
    setIsOpen(false);
    setIsVerified(false);
  }

  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [num3, setNum3] = useState();
  const [num4, setNum4] = useState();
  const [num5, setNum5] = useState();
  const [num6, setNum6] = useState();

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    if (value.length > 1) {
      const newValue = value.slice(0, 1);

      if (id === "num1") setNum1(newValue);
      if (id === "num2") setNum2(newValue);
      if (id === "num3") setNum3(newValue);
      if (id === "num4") setNum4(newValue);
      if (id === "num5") setNum5(newValue);
      if (id === "num6") setNum6(newValue);
    }
  };

  return (
    <div>
      {isVerified ? (
        <div onClick={openModal} className="sendOTP-btn">
          Send OTP
        </div>
      ) : (
        <div className="verified-btn">
          <VscVerified /> Verified
        </div>
      )}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        portalClassName={"ReactModalPortal"}
        className={"ReactModal__Content"}
        overlayClassName={"ReactModal__Overlay"}
        ariaHideApp={false}
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>OTP Verification</h2>

        <form className="modal-form">
          <div className="modal-inputs">
            <input
              type="number"
              pattern="[0-9]"
              min="0"
              max="9"
              id="num1"
              value={num1}
              onInput={handleInputChange}
              required
            />
            <input
              type="number"
              pattern="[0-9]"
              min="0"
              max="9"
              id="num2"
              value={num2}
              onInput={handleInputChange}
              required
            />
            <input
              type="number"
              pattern="[0-9]"
              min="0"
              max="9"
              id="num3"
              value={num3}
              onInput={handleInputChange}
              required
            />
            <input
              type="number"
              pattern="[0-9]"
              min="0"
              max="9"
              id="num4"
              value={num4}
              onInput={handleInputChange}
              required
            />
            <input
              type="number"
              pattern="[0-9]"
              min="0"
              max="9"
              id="num5"
              value={num5}
              onInput={handleInputChange}
              required
            />
            <input
              type="number"
              pattern="[0-9]"
              min="0"
              max="9"
              id="num6"
              value={num6}
              onInput={handleInputChange}
              required
            />
          </div>
          <button onClick={closeModal}>Verify OTP</button>
        </form>
      </Modal>
    </div>
  );
}

export default ModalComp;
