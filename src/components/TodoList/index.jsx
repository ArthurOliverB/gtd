import React from "react";
import TodoItem from "../TodoItem";
import "./TodoList.css";
import { TODO } from "../../shared/data/ListTypeEnum";

export default (props) => {
	function renderListTitle() {
		let tagClass = "list-tag ";
		tagClass += props.listType === TODO ? "todo" : "done";
		const title = props.listType === TODO ? "To do" : "Done";
		return (
			<div className={tagClass}>
				<span>{title}</span>
			</div>
		);
	}

	function renderListOrDoneMessage() {
		if (props.items.length !== 0) {
			return props.items.map((item, index) => {
				return (
					<TodoItem
						item={item}
						key={index}
						onToggleTask={handleToggleTask}
						onDeleteTask={handleDeleteTask}
					/>
				);
			});
		}

		if (props.listType === TODO && props.items.length === 0) {
			return (
				<div className="message-container">
					<i className="fa fa-check-square fa-4x" />
					{props.isFirstRun ? (
						<p>
							Nenhuma tarefa ainda <br /> Vamos adicionar?
						</p>
					) : (
						<p> Boa! Por hoje é só!</p>
					)}
				</div>
			);
		}
	}
	function handleToggleTask(todo) {
		props.onToggleTask(todo);
	}

	function handleDeleteTask(todo) {
		props.onDeleteTask(todo);
	}

	return (
		<div className="list-container">
			<div className="list-wrapper">
				{renderListTitle()}
				{renderListOrDoneMessage()}
			</div>
		</div>
	);
};
