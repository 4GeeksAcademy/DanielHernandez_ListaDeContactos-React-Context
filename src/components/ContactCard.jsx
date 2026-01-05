import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import contactPic from "../assets/img/rigo-baby.jpg";
import actions from "../assets/scripts/functions.js";

const ContactCard = ({ contact }) => {
  const { dispatch } = useGlobalReducer();

  const handleDelete = () => {
    if (window.confirm("¿Seguro que quieres eliminar este contacto?")) {
      actions.deleteContact(dispatch, contact.id);
    }
  };

  return (
    <div className="list-group-item d-flex justify-content-between align-items-center p-4">
      <div className="d-flex align-items-center">
        <img
          src={contactPic}
          alt={contact.name}
          className="rounded-circle me-4"
          width="80"
        />

        <div>
          <h5 className="mb-2">{contact.name}</h5>
          <p className="mb-1 text-secondary">
            <i className="fas fa-map-marker-alt me-2"></i>
            {contact.address}
          </p>
          <p className="mb-1 text-secondary">
            <i className="fas fa-phone me-2"></i>
            {contact.phone}
          </p>
          <p className="mb-0 text-secondary">
            <i className="fas fa-envelope me-2"></i>
            {contact.email}
          </p>
        </div>
      </div>

      <div>
        <Link
          to={`/form/edit/${contact.id}`}
          className="btn btn-link text-dark me-3"
        >
          <i className="fas fa-pencil-alt"></i>
        </Link>

        <button
          onClick={handleDelete}
          className="btn btn-link text-dark"
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default ContactCard;