import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React, { useState } from 'react'
import Header from './components/Header'
import TodoList from './components/TodoList'
import { DONE, TODO } from './shared/data/ListTypeEnum'
import firebase from './firebase'
import Footer from './components/Footer'
import { Button, Accordion } from 'react-bootstrap'
export default props => {
    const [todos, setTodos] = useState([])
    const doneItems = todos.filter(todo => todo.done)
    const todoItems = todos.filter(todo => !todo.done)
    const db = firebase.database()
    
    React.useEffect(() => {
        db.ref().child('todos').on('value', snapshot => {
            const data = snapshot.val()
            const arrayResponse = []
            for (const key in data) {
                arrayResponse.push( {id: `${key}`, ...data[key] })   
            }
            setTodos(arrayResponse)
        })
    }, [db])

    function handleToggleTask(todo) {
        db.ref().child(`todos/${todo.id}/done`).set(!todo.done)
    }

    function handleDeleteTask(todo) {
        db.ref().child(`todos/${todo.id}`).remove()
    }

    return (
        <div className="wrapper">
            <Header/>
            <div className="todo-container">
                <div className="todos-container">
                    <TodoList listType={TODO} items={ todoItems } onToggleTask={handleToggleTask} onDeleteTask={handleDeleteTask} isFirstRun={false}/>
                    <Accordion>
                        <Accordion.Toggle as={Button} variant="dark" eventKey="0">
                            Show completed ({doneItems.length})
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <TodoList listType={DONE} items={ doneItems } onToggleTask={handleToggleTask} onDeleteTask={handleDeleteTask}/>
                        </Accordion.Collapse>
                    </Accordion>
                    
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}
