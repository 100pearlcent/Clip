import {Link} from "react-router-dom";
import {ReactComponent as HomeIcon} from "../../../resources/icons/home.svg";
import {ReactComponent as TodoIcon} from "../../../resources/icons/todo.svg";
import {ReactComponent as MemoIcon} from "../../../resources/icons/memo.svg";

const flex = {
    gap: '5vh',
    display: 'flex',
    flexDirection: 'column'
}

function SideBtnSet() {

    return <div style={flex}>
        {/* {
            sideIcon.map((a) => {
                return <SideBtn key={a.key} icon={a.icon}/>
            })
        } */
        }
        <Link to="/board">
            <HomeIcon className="home"/>
        </Link>
        <Link to="/todo">
            <TodoIcon className="todo"/>
        </Link>
        <Link to="/memo">
            <MemoIcon className="memo"/>
        </Link>
    </div>
}

export default SideBtnSet;