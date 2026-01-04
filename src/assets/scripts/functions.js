const API = 'https://playground.4geeks.com/contact/diary/Dani_list';

function getContacts(dispatch) {
    fetch(`${API}/contacts`)
        .then(resp => resp.json())
        .then(data => {
            console.log("Lista de contactos:", data);
            dispatch({ type: 'load_contacts', payload: data.contacts })
        })
        .catch(error => console.log(error))
        .catch(error => console.error('Error al obtener contactos:', error));
}

function addContact(dispatch, contacto) {
    fetch(`${API}/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contacto)
    })
        .then(response => response.json())
        .then(data => {
            dispatch({ type: 'add_contact', payload: data });
        })
        .catch(error => console.error('Error al añadir contacto:', error));
}

function editContact(dispatch, id, contacto) {
    fetch(`${API}/contacts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contacto)
    })
        .then(response => response.json())
        .then(data => {
            if (data) {
                dispatch({ type: 'edit_contact', payload: data });
            }
        })
        .catch(error => console.error('Error al editar contacto:', error));
}

function deleteContact(dispatch, id) {
    console.log(id)
    fetch(`https://playground.4geeks.com/contact/diary/Dani_list/contacts/${id}`, {
        method: 'DELETE'
    })
        .then((response) => {
            if (response.ok) {
                dispatch({ type: 'delete_contact', payload: id })
            };
        })
        .catch(error => console.error('Error al eliminar contacto:', error));
}

export default { getContacts, addContact, editContact, deleteContact };