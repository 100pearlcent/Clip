import Img from '../../../resources/images/laptop.svg';

/* 메인페이지 이미지 3-1 */

const style= {
    width: '40vw',
    height: '35vh'
}

function Laptop() {
    return <div>
        <img src={ Img } style={style} alt="laptop"></img>
    </div>
}

export default Laptop;
