import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { Menu } from './../../components/menu/Menu';
import { Container } from './../../components/container/Container';
import { FlexWrapper } from './../../components/FlexWrapper';

const menuHeader = ['Home', 'Skills', 'Works', 'Testimony', 'Contact'];

export function Header() {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify='space-between' align='center'>
                    <Logo />
                    <Menu menuArray={menuHeader} />
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
};
const StyledHeader = styled.header`
    background-color: rgb(122, 170, 152);;
    display: flex;
    justify-content: space-between;
`