import LeftSideBar from "../components/organisms/Dashboard/LeftSideBar";
import ToDoBoard from "../components/organisms/Dashboard/ToDoBoard";

const flex = {
    display: "flex"
}

function DashboardTodo() {
    return <div style={flex}>
        <LeftSideBar/>
        <ToDoBoard/>
    </div>
}

export default DashboardTodo;