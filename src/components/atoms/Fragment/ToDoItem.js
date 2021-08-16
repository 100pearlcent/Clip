import React from 'react';
import styled, {css} from 'styled-components';
import {MdDone, MdDelete} from 'react-icons/md';
import {useToDoDispatch} from '../../../ToDoContext';

const Finish = styled.div `
    width: 4.8vh;
    height: 4.8vh;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 4vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 3vh;
    cursor: pointer;
    ${props => props.done && css `border: 1px solid #38d9a9; color: #38d9a9;`}
`;

const ToDoText = styled.div `
  flex: 1;
  font-size: 3.5vh;
  color: #495057;
  ${props => props.done && css `
      color: #ced4da;
    `}
`;

const Remove = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 4vh;
    cursor: pointer;
    &:hover {
        color: #ff6b6b;
    }
    display: none;
`;

const TodoItemBlock = styled.div `
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

function ToDoItem({id, done, text}) {
    const dispatch = useToDoDispatch();
    const onToggle = () => dispatch({type: 'TOGGLE', id});
    const onRemove = () => dispatch({type: 'REMOVE', id});

    return (
        <TodoItemBlock>
            <Finish done={done} onClick={onToggle}>{done && <MdDone/>}</Finish>
            <ToDoText done={done}>{text}</ToDoText>
            <Remove onClick={onRemove}>
                <MdDelete/>
            </Remove>
        </TodoItemBlock>
    );
};

export default React.memo(ToDoItem);