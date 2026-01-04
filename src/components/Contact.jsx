import React from 'react';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from 'react-router-dom';
import contactPic from "../assets/img/rigo-baby.jpg";
import actions from "../assets/scripts/functions.js";

export const Contact = ({contact}) => {
    const { dispatch } = useGlobalReducer();
    console.log("Contact id:", contact.id);
    return (
        <div className=" d-flex list-group-item justify-content-between align-items-center p-4">
            <div className="d-flex align-items-center">
                <img src={contactPic} alt={contact.name} className="avatar-contact rounded-circle mx-5" />

                <div className='mx-3'>
                    <h5 className="mb-3 fs-4 fw-normal">{contact.name}</h5>
                    <p className="mb-1 text-secondary fs-5-5 fw-bolder"><i className="fas fa-map-marker-alt me-2"></i>{contact.address}</p>
                    <p className="mb-1 text-secondary fw-bolder ms-2 fs-8"><i className="fas fa-phone me-2"></i>{contact.phone}</p>
                    <p className="mb-0 text-secondary fw-bolder ms-2 fs-8 "><i className="fas fa-envelope me-2"></i>{contact.email}</p>
                </div>
            </div>
            <div className="me-4 mb-5 px-1">
                <Link to={`/formulario/${contact.id}`} className="btn btn-link text-dark p-0 me-4 mb-4 ">
                    <i className="fas fa-pencil-alt fa-lg"></i>
                </Link>
                <button onClick={() => actions.deleteContact(dispatch, contact.id)} className="btn btn-link text-dark p-0 ms-4  mb-4 me-1">
                    <i className="fas fa-trash-alt fa-lg"></i>
                </button>
            </div>
        </div>
    )
};