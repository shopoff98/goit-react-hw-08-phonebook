import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createContact } from "../redux/contacts/contacts-operations";
import toast from "react-hot-toast";
import { getContacts } from "../redux/contacts/contacts-operations";

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  console.log(contacts);

  function formSubmit({ name, number }) {
    if (contacts.find((item) => item.name === name)) {
      toast.error(`${name} is already in contacts!`);
      return;
    } else {
      const contact = {
        name,
        number,
      };
      console.log(contact);
      dispatch(createContact(contact));
      toast.success("Contact added");
    }
  }
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmit} />
      <h2>Contacts</h2>
      <Filter contacts={contacts} />
      {contacts && <ContactList contacts={contacts} />}
    </>
  );
}
