import Title from "../../atoms/Text/BoldTitle";
import Paragraph from "../../atoms/Text/Paragraph";
import Image from "../../atoms/Image/Worker";
import { paragraph } from "../../../resources/contents";

const style = {width: '57%', padding: '7vh 0 7vh 7vh'}

function Thumbnail() {
    return <div style={{display: 'flex'}}>
        < div style={style}>
            <Title>
                The Most Compact
                <br/>
                The Simpliest
                <br/>
                Note App
            </Title>
            <Paragraph>
                {paragraph[0].desc}
            </Paragraph>
        </div>
        <Image style={{width: '30%'}}/>
    </div>

};

export default Thumbnail;