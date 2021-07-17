import Icon from '../../../resources/icons/polygon.svg';

const style = {
    paddingBottom: '5vh'
}

/* 역삼각형 아이콘 */
function Polygon() {
    return <div style={style}>
        <img src={ Icon } alt="reversed-triangle"></img>
    </div>
}

export default Polygon;
