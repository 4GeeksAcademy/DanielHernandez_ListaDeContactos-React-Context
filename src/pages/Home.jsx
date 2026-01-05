import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import actions from "../assets/scripts/functions.js";
import { useEffect } from "react";
import ContactCard from "../components/ContactCard.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    actions.getContacts(dispatch);
  }, []);

  return (
    <div className="container pb-5">
      <p className="text-center">
        Tu Agenda tiene {store.contacts.length} contacto(s).
      </p>

      <div className="list-group">
        {store.contacts.map(contact => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};