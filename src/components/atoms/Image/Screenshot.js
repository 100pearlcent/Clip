import Img from '../../../resources/images/screenshot.svg';

const center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const style = {
    width: '55%',
    height: '55%',
    padding: '1vh 3vh 1vh 3vh'
}

/* 메인페이지 이미지 3-1 */
function Screenshot() {
    return <div style={center}>
        <img src={ Img } style={style} alt="screenshot"></img>
    </div>
}

export default Screenshot;
