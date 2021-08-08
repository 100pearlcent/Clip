import {createGlobalStyle} from "styled-components";
// import reset from "styled-reset"; import customReset from
// "./customReset.scss";

const GlobalStyle = createGlobalStyle `
   
    html {
        height: 100%;
        height: 100vh;
        font-size: 100%;
        max-width: 100%;
        overflow-x: hidden;
    }

   body {
        height: auto;
        width: auto;
        background-color: ${props => props.theme.lightGray};
        max-height: 100%;
   }

   a {
       color: inherit;
       text-decoration: none;
   }

   abbr[title], acronym[title] {
    border-bottom: none !important;
    }

`;

export default GlobalStyle;
