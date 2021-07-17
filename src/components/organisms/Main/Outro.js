import Quote from "../../molecules/Main/Quote";
import StartBtn from "../../atoms/Button/StartBtn";

const flex = {
    display: "flex"
}

const layout = {
    margin: "0 auto",
    marginTop: "80vh"

}

function Outro() {
    return <section style={flex}>
        <Quote></Quote>
        <StartBtn style={layout}>시 작 하 기</StartBtn>
    </section>;
}

export default Outro;