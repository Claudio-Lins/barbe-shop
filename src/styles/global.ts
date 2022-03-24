import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

html {
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }
    @media (max-width: 720px) {
        font-size: 87.5%;
    }
    @media (max-width: 600px) {
        font-size: 80%;
    }
    @media (max-width: 480px) {
        font-size: 75%;
    }
    @media (max-width: 360px) {
        font-size: 70%;
    }
    @media (max-width: 320px) {
        font-size: 66.67%;
    }
}

body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
}

button {
    cursor: pointer;
}

[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
    
}
`
