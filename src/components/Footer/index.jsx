import React from "react";
import "./footer.css";
import TaskModal from "../TaskModal";

export default (props) => {
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<footer>
			<div className="footer-wrapper">
				<button type="button" onClick={(e) => setModalShow(true)}>
					<i className="fa fa-plus" aria-hidden="true"></i>
				</button>
			</div>
			<TaskModal show={modalShow} onHide={() => setModalShow(false)} />
		</footer>
	);
};
