import Quote from "../../molecules/Main/Quote";
import RoundBtn from "../../atoms/Button/RoundBtn";
import {Link} from "react-router-dom";

const flex = {
    display: "flex",
    width: '100vw',
    height: '100vh'
}

const layout = {
    margin: "10vh 20vh",
    marginTop: "80vh"
}

function Outro() {
    return <section style={flex}>
        <Quote/>
        <Link to="./board">
            <RoundBtn style={layout}>시 작 하 기</RoundBtn>
        </Link>
    </section>;
}

export default Outro;