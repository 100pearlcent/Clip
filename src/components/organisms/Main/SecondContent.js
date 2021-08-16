import Title from "../../molecules/Main/Title";
import Screenshot from "../../atoms/Image/Screenshot";
import Paragraph from "../../atoms/Text/Paragraph";

import {title, paragraph} from "../../../resources/contents";

const fit = {
    width: '100vw',
    height: '100vh'
};

const style = {
    width: '80%',
    textAlign: 'center',
    margin: '0 auto'
};

function SecondContent(props) {
    return <section style={fit}>
        <Title title={title[1].main} paragraph={title[1].desc}/>
        <Screenshot/>
        <Paragraph style={style}>{paragraph[1].desc}</Paragraph>
    </section>
}

export default SecondContent;