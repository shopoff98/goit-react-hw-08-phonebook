import { Button, ButtonWrapper } from "./styled/Common.styled";
import { useDeleteContactMutation } from "../redux/contacts/contacts-reducer";
import { Oval } from "react-loader-spinner";
// import ModalChange from "./ModalChange";
// import { useState } from "react";

export default function ContactListItem({ id, name, phone }) {
  // const [isOpenModal, setIsOpenModal] = useState(false);
  // const [ident, setIdent] = useState("");
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  // function toggleModal(bool) {
  //   setIsOpenModal(bool);
  // }
  return (
    <li style={{ display: "flex" }}>
      <div style={{ display: "flex" }}>
        <p style={{ fontWeight: "700" }}>{name} </p>
        <p>: {phone}</p>
      </div>
      <ButtonWrapper>
        <Button ml={3} type="button" onClick={() => deleteContact(id)}>
          {isDeleting && <Oval color="#212121" height={20} width={20} />}
          {isDeleting ? "Deleting... " : "Delete"}
        </Button>
        {/* <Button
          ml={3}
          type="button"
          onClick={() => {
            toggleModal(true);
            setIdent(id);
          }}
        >
          Change
        </Button>
        {isOpenModal && <ModalChange toggleModal={toggleModal} id={ident} />} */}
      </ButtonWrapper>
    </li>
  );
}
