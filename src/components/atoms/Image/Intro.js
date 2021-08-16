const style= {
    width: '18vw',
    height: '30vh'
}

function Intro(props) {
    return <>
     <img style={style} src={props.imgSrc} alt="medium-box"></img>
    </>
}

export default Intro;
