import { ListContact } from "./styled/ContactList.styled";
import { useSelector } from "react-redux";
import { getFilter } from "../redux/contacts/selectors";
import ContactListItem from "./ContactListItem";

export default function ContactList({ contacts }) {
  const filter = useSelector(getFilter);

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  return (
    <ListContact>
      {visibleContacts().map(({ id, name, number }) => {
        return <ContactListItem key={id} id={id} name={name} phone={number} />;
      })}
    </ListContact>
  );
}
