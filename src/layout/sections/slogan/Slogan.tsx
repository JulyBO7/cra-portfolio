import styled from "styled-components"
import { SectionTitle } from './../../../components/SectionTitle';
import { Button } from "../../../components/Button";
import { Container } from './../../../components/container/Container';
import { FlexWrapper } from './../../../components/FlexWrapper';

export function Slogan() {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction='column' align="center">
                    <SectionTitle>I Am Available For Freelance</SectionTitle>
                    <Button>Hire me</Button>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    )
}

const StyledSlogan = styled.section`
${Button}{
    z-index: 1;
&:hover{
    &::before{
        width: 100%;
        height: 100%;
        z-index: -1;
    }
}   
}

`