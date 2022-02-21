import { Button, ButtonWrapper } from "./styled/Common.styled";
import { useDeleteContactMutation } from "../redux/contacts/contacts-reducer";
import { Oval } from "react-loader-spinner";

export default function ContactListItem({ id, name, phone }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <li>
      {name}: {phone}
      <ButtonWrapper>
        <Button ml={3} type="button" onClick={() => deleteContact(id)}>
          {isDeleting && <Oval color="#212121" height={20} width={20} />}
          {isDeleting ? "Deleting... " : "Delete"}
        </Button>
      </ButtonWrapper>
    </li>
  );
}
