import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createContact } from "../redux/contacts/contacts-operations";
import toast from "react-hot-toast";
import { getContacts } from "../redux/contacts/contacts-operations";
import { getCurrentUser } from "../redux/contacts/auth/auth-operations";
import {
  useGetContactsQuery,
  useAddContactMutation,
} from "../redux/contacts/contacts-reducer";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../components/constants/theme";
import { Container } from "../components/styled/Container.styled";

export default function Contacts() {
  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  });
  function formSubmit({ name, number }) {
    if (data.find((item) => item.name === name)) {
      toast.error(`${name} is already in contacts!`);
      return;
    } else {
      const contact = {
        name,
        number,
      };
      addContact(contact);
      toast.success("Contact added");
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={formSubmit} />
        <h2>Contacts</h2>
        <Filter contacts={data} />
        {data && <ContactList contacts={data} />}
      </Container>
    </ThemeProvider>
  );
}
