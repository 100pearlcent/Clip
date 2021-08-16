import Title from "../../molecules/Main/Title";
import Benefit from "../../molecules/Main/Benefit";

import { title, benefit } from "../../../resources/contents";

const style = {
    width: '100vw',
    height: '100vh'
}

const flex = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "8vh"
}

function FirstContent() {
    return <section style={style}>
        <Title title={title[0].main} paragraph={title[0].desc}/>
        <div style={flex}>
            {
                benefit.map((a) => {
                    return <Benefit
                        key={a.key}
                        imgSrc={a.imgSrc}
                        subtitle={a.subtitle}
                        desc={a.desc}/>
                })
            }
        </div>
    </section>
}

export default FirstContent;