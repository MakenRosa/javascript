import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './tasklist.css';
import TaskItem from '../TaskItem/TaskItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'


export default function TaskList({ title, taskState, onAddTask, tasks, onTaskUpdate, onDeleteTask }) {
    const addTask = () => {
        onAddTask("Nova Tarefa", taskState);
    };

    return (
        <div className="tasklist">
            <div className="title">{title}</div>
            <div className="content">
                {tasks && tasks.map((task) => {
                    return (<TaskItem key={task.id} id={task.id} title={task.title} state={task.state} onTaskUpdate={onTaskUpdate} onDeleteTask={onDeleteTask} />);
                })}
                { tasks.length === 0 && <div className="empty-list">Nenhuma tarefa encontrada</div> }
                <button className="btn" onClick={addTask}><FontAwesomeIcon icon={faCirclePlus} /> Adicionar tarefa</button>
            </div>
            
        </div>
    );
}

TaskList.propTypes = {
    title: PropTypes.string.isRequired,
    onAddTask: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired
};