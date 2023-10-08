import styled from "styled-components"


export function Menu(props: { menuArray: Array<string> }) {
    return <StyledNav>
        <ul> {props.menuArray.map((items) => { return <li> <a href="">{items}</a> </li> })} </ul>
    </StyledNav>
}

const StyledNav = styled.nav`
    ul{
    display: flex;
    justify-content: center;
    gap: 30px;
    }   
`