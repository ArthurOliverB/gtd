import React from "react";
import "./header.css";

export default (props) => (
	<nav
		className="navbar fixed-top navbar-expand-sm"
		style={{ backgroundColor: "#121416" }}
	>
		<div className="logo-container">
			<i className="fa fa-check-square fa-lg" />
			<a className="navbar-brand" href="/">
				To do
			</a>
		</div>
	</nav>
);
