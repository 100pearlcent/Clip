import HomeButton from '../../atoms/Button/HomeBtn';
import StartButton from "../../atoms/Button/StartBtn";

const style = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8vh 10vh 5vh'
};



function Header() {
    return <header style={style}>
        <HomeButton>Clip</HomeButton>
        <StartButton>시 작 하 기</StartButton>
    </header>;
}

export default Header;