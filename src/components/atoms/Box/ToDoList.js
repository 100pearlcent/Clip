import styled from "styled-components";
import ToDoItem from "../Fragment/ToDoItem";
import {useToDoState} from "../../../ToDoContext";

const ToDoListBlock = styled.div `
    flex: 1;
    width: 44vh;
    height: 70vh;
    background-color: #FFF;
    padding: 3vh;
    overflow-y: auto;
`;

function ToDoList() {
    const todos = useToDoState();

    return (
        <ToDoListBlock>
            {
                todos.map(
                    todo => (<ToDoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done}/>)
                )
            }
        </ToDoListBlock>
    )
}

export default ToDoList;