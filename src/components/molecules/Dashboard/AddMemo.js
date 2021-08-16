import React, {useState} from 'react';
import styled from 'styled-components';
import {RiSave3Line} from 'react-icons/ri';

const Add = styled.div`
    color: #dee2e6;
    font-size: 4vh;
    cursor: pointer;
    float: right;
    margin-right: 0.1vh;
    margin-top: 8vh;
    &:hover {
        color: #39A9CB;
    }
    display: none;
`

const MemoBlock = styled.div `
    margin-top: 11vh;
    border-radius: 20px;
    width: 30vh;
    height: 30vh;
    background: #FEFF9C;
    box-shadow: 0 2px 5px #ccc;
    &:hover {
        ${Add} {
            display: initial;
        }
    }
`;

const form = {
    padding: '3vh'
}

const input = {
    width: '100%',
    backgroundColor: 'inherit',
    border: 'none',
    padding: '4px',
    outline: 'none',
    fontSize: '3vh',
    fontFamily: 'inherit',
    resize: 'none'
}

function AddMemo(props) {
    const [memo, setMemo] = useState({title: "", content: ""});

    function onChange(e) {
        const {name, value} = e.target;

        setMemo(prevMemo => {
            return {
                ...prevMemo,
                [name]: value
            };
        });
    }

    function onAdd(e) {
        props.onAdd(memo);
        setMemo({title: "", content: ""});
        e.preventDefault();
    }

    return (
        <MemoBlock>
            <form style={form}>
                <input
                    name="title"
                    onChange={onChange}
                    value={memo.title}
                    placeholder="제목"
                    type='text'
                    maxLength='7'
                    style={input}
                    
                    />
                <textarea
                    name="content"
                    onChange={onChange}
                    value={memo.content}
                    placeholder="메모 할 내용"
                    type='text'
                    maxLength='16'
                    style={input}
                    />
                <Add onClick={onAdd}>
                    <RiSave3Line/>
                </Add>
            </form>
        </MemoBlock>
    )
}

export default AddMemo;