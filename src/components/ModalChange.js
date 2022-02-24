import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Form } from "./styled/ContactForm.styled";
import { Modal, Overlay } from "./styled/Modal.styled";
import { Button, Input, Label } from "./styled/Common.styled";
const modalRoot = document.querySelector("#modal-root");
export default function ModalChange({ toggleModal }) {
  // const [toggleModal, setToggleModal] = useState(false);
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === "Escape") {
        toggleModal(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleModal]);

  function handleBackdropClick(e) {
    if (e.currentTarget === e.target) {
      toggleModal(false);
    }
  }
  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <Modal>
        {" "}
        <Form>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              value={""}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>

          <Label>
            Telephone
            <Input
              type="tel"
              name="phone"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button mb={1} type="submit">
            Add contact
          </Button>
        </Form>
      </Modal>
    </Overlay>,
    modalRoot
  );
}
