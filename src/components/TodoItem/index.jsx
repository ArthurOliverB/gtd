import React from 'react'
import './todoItem.css'

export default (props) => {
    
    function mountListItem() {
        return props.item.done ? renderDoneItem() : renderItem() 
    }
    
    function renderDoneItem() {
        return (
            <p className="done-item">{ props.item.name }</p>
        )
    }

    function renderItem() {
        console.log("hello");
        console.log(props.item);
        return (
            <p>{ props.item.name }</p>
        )
    }
    return (
        <div className="card">
            <div className="card-body" onClick={e => props.onToggleTask(props.item)}>
                { mountListItem() }
            </div>
            <div className="card-action">
                <i className="fa fa-times-circle" aria-hidden="true" onClick={e => props.onDeleteTask(props.item)}></i>
            </div>
        </div>
    )
}
    