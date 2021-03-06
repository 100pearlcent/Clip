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
            <RoundBtn style={layout}>μ μ ν κΈ°</RoundBtn>
        </Link>
    </section>;
}

export default Outro;