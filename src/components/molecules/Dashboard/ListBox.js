import Title from "../../atoms/Text/DashboardTitle";
import ToDoItem from "../../atoms/Fragment/ToDoItem";
import ToDoList from "../../atoms/Box/ToDoList";

const flex = {
    display: 'flex'
}

function ListBox() {
    return <div>
        <Title>Today's Task</Title>
        <br/><br/>
        <div style={flex}>
            <ToDoList>
                <ToDoItem></ToDoItem>
            </ToDoList>
        </div>
    </div>
}

export default ListBox;