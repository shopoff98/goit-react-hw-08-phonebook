import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import {
  useGetContactsQuery,
  useAddContactMutation,
} from "./../redux/contacts/contacts-reducer";
import toast from "react-hot-toast";

export default function Contacts() {
  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();
  function formSubmit({ name, phone }) {
    if (data.find((item) => item.name === name)) {
      toast.error(`${name} is already in contacts!`);
      return;
    } else {
      const contact = {
        name,
        phone,
      };
      addContact(contact);
      toast.success("Contact added");
    }
  }
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmit} />
      <h2>Contacts</h2>
      <Filter contacts={data} />
      {data && <ContactList contacts={data} />}
    </>
  );
}
