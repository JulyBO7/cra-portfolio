import styled from "styled-components";
import { theme } from "../styles/theme/Theme";

export const Button = styled.button`
    width: 170px;
    height: 32px;
    position: relative;
    background-color: rgba(0, 0, 0, 0);
    border: 0 none rgba(0, 0, 0, 0);
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${theme.color.font};
    cursor: pointer;
        &:hover{



}

    &::before {
        content: '';
        display: inline-block;
        background-color: ${theme.color.accent};
        height: 10px;
        width: 77px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }

`