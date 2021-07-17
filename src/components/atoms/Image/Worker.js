// import { Fragment } from "react";
import Img from '../../../resources/images/worker.svg';

const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '5vh'
};

const maxWidth = {
    maxWidth: '90%'
}

/* 메인페이지 이미지 1 */
function Worker() {
    return <div style={style}>
        <img src={ Img } style={maxWidth} alt="worker-top-of-a-phone"></img>
    </div>
}

export default Worker;
