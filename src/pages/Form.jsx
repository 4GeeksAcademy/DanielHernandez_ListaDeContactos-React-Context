// Import necessary components from react-router-dom and other parts of the application.
import { useNavigate, Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { useState, useEffect} from "react";
import actions from "../assets/scripts/functions.js";


export const Form = () => {
  const { store, dispatch } = useGlobalReducer()

  const initialInput = {
    name: " ", 
    email: " ", 
    phone: " ", 
    address: " "
  };

  const [newInput, setNewInput] = useState(initialInput);
  const navigate = useNavigate();
  const {id} = useParams();

  const inputOnChange = (event) => {
    setNewInput({ ...newInput, [event.target.name]: event.target.value })
  };

  const submitContact = async(event) => {
    event.preventDefault()
    if (id) {
      await actions.editContact(dispatch, id, newInput)
    }else{
      await actions.addContact(dispatch, newInput);
    }
    navigate('/')
  };

  useEffect(() => {
    if (id) {
      const contact = store.contacts.find(e => e.id == id)
      if (contact) {
        setNewInput(contact)
      }
    }
  } , [id, store.contacts])

  return (
    <div className="py-5">
      <h1 className="text-center">Nuevo Contacto</h1>
      <form onSubmit={submitContact} className="p-3">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control " name="name" placeholder='Nombre' value={newInput.name} onChange={inputOnChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control " name="email" placeholder='Email' value={newInput.email} onChange={inputOnChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Telefono</label>
          <input type="tel" className="form-control " name="phone" placeholder='Telefono' value={newInput.phone} onChange={inputOnChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Dirección</label>
          <input type="text" className="form-control " name="address" placeholder='Dirección' value={newInput.address} onChange={inputOnChange} required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Guardar Contact</button>
      </form>
      <Link to="/" className="d-block mt-1">Regresa a tu Agenda</Link>
    </div>
  );
};