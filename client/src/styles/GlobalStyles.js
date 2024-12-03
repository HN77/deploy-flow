import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,*::before,*::after{
        margin: 0;
        padding: 0;
    }

    html{
        // This defines what 1rem is
        font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%
    }

    body{
        font-family: 'Poppins', sans-serif;
        overflow-x: hidden;
    }

    h1,h2,h3,h4,h5,h6{
        margin: 0;
        padding: 0;
    }

    a{
        color: inherit;
        text-decoration: none;
    }
`;

export default GlobalStyle;
