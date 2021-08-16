import styled from 'styled-components';

/* 라운드 버튼 */
let RoundBtn = styled.div`
    width: 19vh;
    height: 3.5vh;
    color: ${ props=> props.theme.red };
    font-family: "Cafe24s";
    font-size: 3vh;
    text-align: center;
    border: 0.2rem solid ${ props=> props.theme.red };
    border-radius: 5rem;
    padding: 0.3em;
    cursor: pointer;
`;

export default RoundBtn;


