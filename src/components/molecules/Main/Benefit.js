import Intro from "../../atoms/Image/Intro";
import Subtitle from "../../atoms/Text/Subtitle";
import Paragraph from "../../atoms/Text/Paragraph";

const style = {
    display: "flex",
    justifyContents: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "27%",
    textAlign: "center"
}

function Benefit(props) {
    return <div style={style}>
        <Intro imgSrc={props.imgSrc}></Intro>
        <Subtitle>{props.subtitle}</Subtitle>
        <Paragraph>{props.desc}</Paragraph>
    </div>
}

export default Benefit;