import styled from "styled-components";
import { theme } from "../styles/theme/Theme";


export const Link = styled.a`
font-size: 14px;
font-weight: 400;
letter-spacing: 1px;
text-transform: uppercase;
// display: inline-block;
padding: 10px;
z-index: 0;
position: relative;
&:hover {
    &::before {
        // background-color: ${theme.color.accent};
        height: 10px;
    }   
 }
&::before {
    content:'';
    display: inline-block;
    background-color: ${theme.color.accent};
    position: absolute;
    bottom: 7px;
    left: 0;
    right: 0;
    z-index: -1;
}

`