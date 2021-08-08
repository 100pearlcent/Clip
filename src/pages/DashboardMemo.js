import LeftSideBar from "../components/organisms/Dashboard/LeftSideBar";
import MemoBoard from "../components/organisms/Dashboard/MemoBoard";

const flex = {
    display: "flex"
}

function DashboardMemo() {
    return <div style={flex}>
        <LeftSideBar/>
        <MemoBoard/>
    </div>
}

export default DashboardMemo;