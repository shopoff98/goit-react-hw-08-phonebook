import { Button, ButtonWrapper } from "./styled/Common.styled";
import { deleteContact } from "../redux/contacts/contacts-operations";
import { useDispatch, useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";

export default function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();
  const isDeleting = useSelector((state) => state.contacts.isLoading);
  console.log(isDeleting);
  return (
    <li>
      {name}: {number}
      <ButtonWrapper>
        <Button
          ml={3}
          type="button"
          onClick={() => dispatch(deleteContact(id))}
        >
          {isDeleting && <Oval color="#212121" height={20} width={20} />}
          {isDeleting ? "Deleting... " : "Delete"}
        </Button>
      </ButtonWrapper>
    </li>
  );
}
