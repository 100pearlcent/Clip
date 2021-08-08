import LeftSideBar from "../components/organisms/Dashboard/LeftSideBar";
import HomeBoard from "../components/organisms/Dashboard/HomeBoard";

const flex = {
    display: "flex",
    overflow: "hidden"
}

function DashboardHome() {
    return <div style={flex}>
        <LeftSideBar/>
        <HomeBoard/>
    </div>
}

export default DashboardHome;