import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Contact list</span>
				</Link>
				<div className="ml-auto">
					<Link to="/form">
						<button className="btn btn-primary">New contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};