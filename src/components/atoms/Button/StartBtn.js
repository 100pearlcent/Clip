import styled from 'styled-components';

/* 시작하기 버튼 */
let StartBtn = styled.div`
    width: 19vh;
    height: 3.5vh;
    color: ${ props=> props.theme.red };
    font-family: "Cafe24s";
    font-size: 3vh;
    text-align: center;
    border: 0.2rem solid ${ props=> props.theme.red };
    border-radius: 5rem;
    padding: 0.3em;
`;

export default StartBtn;
