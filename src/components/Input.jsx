import useGlobalReducer from "../hooks/useGlobalReducer";
import { addContact, editContact } from "../assets/scripts/functions";
import { Link } from "react-router-dom";

export const Input = ({ id }) => {

    const { store, dispatch } = useGlobalReducer();

    const handleSave = () => {
        if (id) {
            editContact(dispatch, id, store.inputValue);   // PUT
        } else {
            addContact(dispatch, store.inputValue);       // POST
        }
    };

    return (
        <>
            <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    name="name"
                    value={store.inputValue.name}
                    onChange={(e) => dispatch({
                        type: "input_value",
                        key: e.target.name,
                        value: e.target.value
                    })}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    name="email"
                    value={store.inputValue.email}
                    onChange={(e) => dispatch({
                        type: "input_value",
                        key: e.target.name,
                        value: e.target.value
                    })}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter phone"
                    name="phone"
                    value={store.inputValue.phone}
                    onChange={(e) => dispatch({
                        type: "input_value",
                        key: e.target.name,
                        value: e.target.value
                    })}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Address</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter address"
                    name="address"
                    value={store.inputValue.address}
                    onChange={(e) => dispatch({
                        type: "input_value",
                        key: e.target.name,
                        value: e.target.value
                    })}
                />
            </div>

            <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button" onClick={handleSave}>
                    Save
                </button>
            </div>

            <Link to="/">or get back to contacts</Link>
        </>
    );
}