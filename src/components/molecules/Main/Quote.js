import Author from "../../atoms/Text/Author";
import Quotes from "../../atoms/Text/Quote";
import Laptop from "../../atoms/Image/Laptop";

const laptop = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%'
}

const style = {
    width: '70%',
    height: '100vh',
    backgroundColor: '#FFEDA3',
    overflow: 'auto'
}

const quote = {
    marginTop: '5%'
}

const author = {
    marginLeft: '5%',
    marginTop: '7%'
}


function Quote() {
    return <div style={style}>
        <Author style={author}>- Benjamin Franklin</Author>
        <Quotes style={quote}>“ By Failing to prepare,
            <br/>
            you are preparing to fail. ”</Quotes>
        <div style={laptop}>
            <Laptop></Laptop>
        </div>
    </div>
}

export default Quote;