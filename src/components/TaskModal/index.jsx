import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./TaskModal.css";
import firebase from '../../firebase';

export default (props) => {
	const [todo, setTodo] = useState("");
	const db = firebase.database();

	const handleSave = () => {
		db.ref().child("todos").push({ name: todo, done: false });
		props.onHide();
	}
	
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header>
				<Modal.Title id="contained-modal-title-vcenter">
					Adicionar nova tarefa
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group>
						<Form.Label>Nova tarefa</Form.Label>
						<Form.Control type="email" placeholder="Insira a nova tarefa" onChange={e => setTodo(e.target.value)}/>
						<Form.Text type="number">
							DICA: Quebre uma tarefa grande em pequenas tarefas!
						</Form.Text>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="primary" onClick={ e => handleSave()}>
					Adicionar
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
