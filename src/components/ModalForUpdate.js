import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Modal, Overlay } from "./styled/Modal.styled";
const modalRoot = document.querySelector("#modal-root");
export default function ModalForUpdate() {
  const [toggleModal, setToggleModal] = useState(false);
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === "Escape") {
        setToggleModal(true);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleModal]);

  function handleBackdropClick(e) {
    if (e.currentTarget === e.target) {
      setToggleModal(true);
    }
  }
  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <Modal></Modal>
    </Overlay>,
    modalRoot
  );
}
