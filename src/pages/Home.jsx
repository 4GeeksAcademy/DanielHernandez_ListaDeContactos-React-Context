import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import actions from "../assets/scripts/functions.js";
import { useEffect} from "react";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		fetch('https://playground.4geeks.com/agendas/Dani_list/contacts', {
			method: 'POST',
		})
			.then(resp => resp.json())
			.then(data =>
				console.log(data))
			.catch(error =>
				console.log(error));
	}, [])

	useEffect(() => {
        actions.getContacts(dispatch);
    }, []);
	console.log(store.contacts)

	const contactNumber = store.contacts.length;

	return (
		<div className="pb-5 ">
			<div className="list-group">
				<p className="text-center">Tu Agenda tiene {contactNumber} contacto(s).</p>
				{store.contacts.map(contact => (
						<Contacto key={contact.id} contact={contact}/>))}
			</div>
		</div>
	);
};