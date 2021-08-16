import styled from 'styled-components';

/* div > p 로 변경하기 */

/* 메인페이지 본문 텍스트 */
let Paragraph = styled.div`
    font-family: "Exo-Regular";
    color: ${props=> props.theme.gray};
    font-size: 2.5vh;
    padding-top: 1vh;
`;

export default Paragraph;
