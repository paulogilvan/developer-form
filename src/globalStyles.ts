import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        font-family: 'Roboto', sans-serif;
        /* background-color: #121212;
        color: #fff; */
    }
`;