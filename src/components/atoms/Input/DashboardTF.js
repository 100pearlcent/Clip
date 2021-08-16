import styled from "styled-components";

let DashboardTF= styled.input`
    border: ${props=> props.theme.lightGray};
    width: 40vh;
    height: 8vh;
    border-radius: 10px;
    padding: 10px;
    font-family: "Rubik-Regular";
    font-size: 3vh;
    text-align: center;

    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px gray;
    }
`;

export default DashboardTF;