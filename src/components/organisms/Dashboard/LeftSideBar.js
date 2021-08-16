import SideBtnSet from "../../molecules/Dashboard/SideBtnSet";

const style= {
    width: '15vh',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white'
}

const divider= {
    height: '30vh'
}

function LeftSideBar() {
    return <div style={style}>
        <SideBtnSet/>
        <div style={divider}/>
    </div>
}

export default LeftSideBar;