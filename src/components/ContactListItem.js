import { Button, ButtonWrapper } from "./styled/Common.styled";
import { useDeleteContactMutation } from "../redux/contacts/contacts-reducer";
import { Oval } from "react-loader-spinner";
import ModalChange from "./ModalChange";
import { useState } from "react";

export default function ContactListItem({ id, name, phone }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  function toggleModal(bool) {
    setIsOpenModal(bool);
  }
  return (
    <li>
      {name}: {phone}
      <ButtonWrapper>
        <Button ml={3} type="button" onClick={() => deleteContact(id)}>
          {isDeleting && <Oval color="#212121" height={20} width={20} />}
          {isDeleting ? "Deleting... " : "Delete"}
        </Button>
        <Button>Change</Button>
        {isOpenModal && <ModalChange toggleModal={toggleModal} />}
      </ButtonWrapper>
    </li>
  );
}
