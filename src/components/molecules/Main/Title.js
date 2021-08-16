import Polygon from "../../atoms/Icon/Polygon";
import TitleText from "../../atoms/Text/Title";
import Paragraph from "../../atoms/Text/Paragraph";

const style = {
    textAlign: 'center',
    padding: '3vh'
}

function Title(props) {
    return <div style={style}>
        <Polygon/>
        <TitleText>{props.title}</TitleText>
        <Paragraph>{props.paragraph}</Paragraph>
    </div>
}

export default Title;