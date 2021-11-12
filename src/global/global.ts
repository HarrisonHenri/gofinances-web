import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --shape: #FFFFFF;

    --attention: #E83F5B;
    --success: #12A454;

    --primary: #5636D3;
    --primary-light: #6933FF;

    --title: #363F5F;
    --body: #969CB2;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  body, input, textarea, button {
    font-family: 'Poppins' sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, strong {
    font-weight: 600;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: var(--background);
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  .react-modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    background: rgba(0, 0, 0, 0.5);
  }

  .react-modal-content {
    position: relative;

    background: var(--background);
    border-radius: 0.25rem;
    padding: 3rem;

    width: 100%;
    max-width: 576px;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;

    transition: filter 0.2s;

    background: transparent;
    border: 0;


    &:hover {
      filter: brightness(0.8);
    }
  }
`;
