const style= {
    width: '5vh',
    height: '5vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

function SideBtn(props) {
    return <div style={style}>
        <img src={ props.src } alt="side-button"/>
    </div>
}

export default SideBtn;
