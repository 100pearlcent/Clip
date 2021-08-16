import Header from "../../molecules/Main/Header";
import Thumbnail from "../../molecules/Main/Thumbnail";

const fit = {
    width: '100vw',
    height: '100vh'
}

function Intro() {
    return <section style={fit}>
        <Header/>
        <Thumbnail/>
    </section>
};

export default Intro;