import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    html {
        box-sizing: border-box;
    }
  
    *, *::after, *::before {
        box-sizing: inherit;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        margin:0;
        padding: 0;
        font-family: 'Nunito', sans-serif;
        overflow-x: hidden;
    }

    a, button {
        font-family: 'Nunito', sans-serif;
    }
`;
