import React, {useState, useRef} from 'react';
import Textfield from "../../atoms/Input/DashboardTF";
import ListBox from "../../molecules/Dashboard/ListBox";
import {useToDoDispatch, useToDoNextId} from "../../../ToDoContext";
import TaskLeftBox from '../../molecules/Dashboard/TaskLeftBox';

const margin = {
    marginTop: '9vh'
}

const flex = {
    display: 'flex',
    gap: '13vh',
    marginTop: '7vh',
    marginLeft: '11vh',
    width: '100vw',
    height: '100vh'
}

function ToDoBoard() {
    const [todo, setTodo] = useState('');

    const dispatch = useToDoDispatch();
    const nextId = useToDoNextId();
    const todoInput = useRef();

    const onChangeT = e => setTodo(e.target.value);
    const onSubmitT = e => {
        e.preventDefault();
        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current,
                text: todo,
                done: false
            }
        });
        setTodo('');
        todoInput.current.value = '';
        nextId.current += 1;
    }

    return <div style={flex}>
        <ListBox/>
        <TaskLeftBox/>
        <form onSubmit={onSubmitT}>
            <Textfield
                placeholder="Write Things To Do + ⏎"
                maxLength="25"
                onChange={onChangeT}
                ref={todoInput}
                style={margin}/>
        </form>
    </div>
}

export default React.memo(ToDoBoard);