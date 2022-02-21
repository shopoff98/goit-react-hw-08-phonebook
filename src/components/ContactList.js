import { ListContact } from "./styled/ContactList.styled";
import { useSelector } from "react-redux";
import { getFilter } from "../redux/contacts/contacts-selectors";
import ContactListItem from "./ContactListItem";

const ContactList = ({ contacts }) => {
  const filter = useSelector(getFilter);

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  return (
    <ListContact>
      {visibleContacts().map(({ id, name, phone }) => {
        return <ContactListItem key={id} id={id} name={name} phone={phone} />;
      })}
    </ListContact>
  );
};

export default ContactList;
