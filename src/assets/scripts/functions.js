const API = "https://playground.4geeks.com/contact/agendas/Dani_list";

const getContacts = async (dispatch) => {
  try {
    const resp = await fetch(`${API}/contacts`);
    const data = await resp.json();
    dispatch({ type: "load_contacts", payload: data.contacts });
  } catch (error) {
    console.error("Error al obtener contactos:", error);
  }
};

const addContact = async (dispatch, contact) => {
  try {
    const resp = await fetch(`${API}/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    });

    const data = await resp.json();
    dispatch({ type: "add_contact", payload: data });
  } catch (error) {
    console.error("Error al crear contacto:", error);
  }
};

const updateContact = async (dispatch, id, contact) => {
  try {
    const resp = await fetch(`${API}/contacts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    });

    const data = await resp.json();
    dispatch({ type: "update_contact", payload: data });
  } catch (error) {
    console.error("Error al actualizar contacto:", error);
  }
};

const deleteContact = async (dispatch, id) => {
  try {
    const resp = await fetch(`${API}/contacts/${id}`, {
      method: "DELETE",
    });

    if (resp.ok) {
      dispatch({ type: "delete_contact", payload: id });
    }
  } catch (error) {
    console.error("Error al borrar contacto:", error);
  }
};

export default {
  getContacts,
  addContact,
  updateContact,
  deleteContact,
};