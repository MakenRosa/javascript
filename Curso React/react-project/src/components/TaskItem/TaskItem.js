import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './taskitem.css';

export default function TaskItem({ id, title, state, onTaskUpdate, onDeleteTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const onTitleChange = (e) => {
        const newTitle = e.target.value;
        setNewTitle(newTitle);
        onTaskUpdate(id, newTitle, state);
    }

    const onKeyPress = (e) => {
        if (e.key === 'Enter' || e.key === 'Escape') {
            setIsEditing(false);
            if (newTitle.length === 0) {
                onDeleteTask(id);
            }
        }
    };

    const onTaskStateChange = (e) => {
        onTaskUpdate(id, newTitle, e.target.value);
    };

    if (isEditing) {
        return <div className="task-item">
            <input type="text" value={newTitle} onChange={onTitleChange} onKeyUp={onKeyPress} />
        </div>;
    } else {
        return (
            <div className="task-item">
                <div onClick={(e) => setIsEditing(true)}>{newTitle}</div>
                <select onChange={onTaskStateChange} value={state}>
                    <option value="Pendente">Pendente</option>
                    <option value="Em andamento">Em andamento</option>
                    <option value="Completa">Completa</option>
                </select>
            </div>
        );
    }
}
TaskItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
};