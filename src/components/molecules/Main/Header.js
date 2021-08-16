import HomeButton from '../../atoms/Button/HomeBtn';
import RoundBtn from "../../atoms/Button/RoundBtn";
import {Link} from 'react-router-dom';

const style = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8vh 10vh 5vh'
};

function Header() {
    return <header style={style}>
        <HomeButton>Clip</HomeButton>
        <Link to="./board">
            <RoundBtn color="red">시 작 하 기</RoundBtn>
        </Link>
    </header>;
}

export default Header;