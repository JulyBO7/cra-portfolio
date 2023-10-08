import styled from "styled-components"
import { Link } from './../../../../components/Link';


export function TabMenu(props: { menuArray: Array<string> }) {
    return <StyledNav>
        <List> {props.menuArray.map((items) => 
            { return <ListItem> <Link href="">{items}</Link> </ListItem> })} </List>
    </StyledNav>
}

const StyledNav = styled.nav`
margin-bottom: 50px;
    ul{
    display: flex;
    justify-content: center;
    gap: 40px;
    }   
`
const List = styled.ul`
`

const ListItem = styled.li`
`
