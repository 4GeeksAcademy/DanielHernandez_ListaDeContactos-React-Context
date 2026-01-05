import { useNavigate, Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useState, useEffect } from "react";
import actions from "../assets/scripts/functions.js";

export const Form = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();
  const { id } = useParams();

  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (id) {
      await actions.updateContact(dispatch, id, input);
    } else {
      await actions.addContact(dispatch, input);
    }

    navigate("/");
  };

  useEffect(() => {
    if (id) {
      const contact = store.contacts.find(c => c.id === parseInt(id));
      if (contact) setInput(contact);
    }
  }, [id, store.contacts]);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">
        {id ? "Editar Contacto" : "Nuevo Contacto"}
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={input.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={input.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            value={input.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Dirección</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={input.address}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Guardar
        </button>
      </form>

      <Link to="/" className="d-block mt-3 text-center">
        Regresa a tu agenda
      </Link>
    </div>
  );
};