import styled from 'styled-components';
import {MdDelete} from 'react-icons/md';

const Remove = styled.div `
    position: absolute;
    color: #dee2e6;
    font-size: 4vh;
    cursor: pointer;
    margin-left: 24vh;
    margin-top: 24vh;
    &:hover {
        color: #ff6b6b;
    }
    display: none;
`;

const MemoBlock = styled.div `
    position: relative;
    border-radius: 20px;
    width: 30vh;
    height: 30vh;
    background: #FEFF9C;
    box-shadow: 0 2px 5px #ccc;

    &:hover {
        ${Remove} {
            display: initial;
        }
    }
`;

const title = {
    paddingTop: '2vh',
    paddingLeft: '4vh',
    fontSize: '3.5vh'
}

const content = {
    padding: '0vh 3vh 0vh',
    fontSize: '2.5vh',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word'
}

const flex = {
    display: 'flex',
    flexDirection: 'column'
}

function Memo(props) {

    function onDelete() {
        props.onDelete(props.id);
    }

    return (
        <MemoBlock style={flex}>
            <div>
            <h1 style={title}>{props.title}</h1>
            <p style={content}>{props.content}</p>
            </div>
            <Remove onClick={onDelete}>
                <MdDelete/>
            </Remove>
        </MemoBlock>
    );

}

export default Memo;