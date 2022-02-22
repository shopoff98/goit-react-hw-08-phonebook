import { ListContact } from "./styled/ContactList.styled";
import { getFilter } from "../redux/contacts/selectors";
import { Button, ButtonWrapper } from "./styled/Common.styled";
import { deleteContact } from "../redux/contacts/contacts-operations";
import { useDispatch, useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";
import ContactListItem from "./ContactListItem";

const ContactList = ({ contacts }) => {
  // const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const isDeleting = useSelector((state) => state.contacts.isLoading);

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  return (
    <ListContact>
      {visibleContacts().map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}:{number}
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
        // <ContactListItem key={id} id={id} name={name} phone={number} />;
      })}
    </ListContact>
  );
};

export default ContactList;
