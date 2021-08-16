import { useToDoState } from "../../../ToDoContext";
import TaskLeft from "../../atoms/Text/TaskLeft";

const style = {
    width: '25vh',
    height: '15vh',
    textAlign: 'center',
    marginTop: '10vh'
}

function TaskLeftBox() {
    const todos = useToDoState();
    const leftTasks = todos.filter(todo => !todo.done);

    return <div style={style}>
        <TaskLeft>남은 할 일 {<br/>} {leftTasks.length} 개</TaskLeft>
    </div>
}

export default TaskLeftBox;