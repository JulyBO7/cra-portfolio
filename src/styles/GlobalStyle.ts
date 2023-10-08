import { createGlobalStyle } from "styled-components";
import { theme } from './theme/Theme'


export const GlobalStyle = createGlobalStyle`
*, 
*::before,
*::after{
  margin: 0;
  padding: 0;
  box-sixing: border-box;
}
    body {
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.color.font};
    line-height: 1.4;
    }
    a {
      text-decoration: none;
      color: ${theme.color.font};
    }
    p {
      font-size: 14px;
      font-weight: 400;
      color: ${theme.color.font};
    
    }
    h3 {
      font-family: Josefin Sans, sans-serif;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 1px;
    }
    ul {
      list-style: none;
    }
    section {
      padding: 100px 100px;
    }
    section:nth-of-type(odd){
      background-color: ${theme.color.primeryBG};
    }
    section:nth-of-type(even){
      background-color: ${theme.color.secondaryBG};
    }
  
`