import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Modal, Overlay } from "./styled/Modal.styled";
import { Button, Input, Label } from "./styled/Common.styled";
import { FormModal } from "./styled/ContactForm.styled";
import toast from "react-hot-toast";
import {
  usePatchContactMutation,
  useGetContactsQuery,
} from "../redux/contacts/contacts-reducer";
const modalRoot = document.querySelector("#modal-root");

export default function ModalChange({ toggleModal, id }) {
  const { data } = useGetContactsQuery();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [patchContact] = usePatchContactMutation();

  function handleChange(e) {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "phone":
        setNumber(value);
        break;
      default:
        return;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (data.find((item) => item.name === name)) {
      toast.error(`${name} is already in contacts!`);
      return;
    }
    const contact = { name, number };
    console.log(contact);
    patchContact(id, contact);
    toggleModal(false);
    console.log(id);
    setName("");
    setNumber("");
  }
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
        <FormModal onSubmit={handleSubmit}>
          <h2>Enter Changes</h2>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChange}
            />
          </Label>

          <Label>
            Telephone
            <Input
              type="tel"
              name="phone"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleChange}
            />
          </Label>
          <Button mb={6} type="submit">
            Change
          </Button>
        </FormModal>
      </Modal>
    </Overlay>,
    modalRoot
  );
}
