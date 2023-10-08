import styled from 'styled-components'
import photo from '../../../assets/images/photo.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/container/Container';
import { theme } from '../../../styles/theme/Theme';

export function Main() {
    return <StyledMain>
        <Container>
            <FlexWrapper align='center' justify='space-between'>
                <div>
                    <SmallText>HI there</SmallText>
                    <Name>I am <span>Yulia Balaeva</span></Name>
                    <MainTitle>A frontend developer</MainTitle>
                </div>
                <WrapperPhoto>
                    <Photo src={photo} alt="Julia Balaeva" />
                </WrapperPhoto>
            </FlexWrapper>
        </Container>
    </StyledMain>
};

const StyledMain = styled.section`
    background-color: rgb(211, 229, 209);
    min-height: 100vh;
    display:flex;
`
const SmallText = styled.span`
 font-size: 14px;
 font-weight: 400;
`
const Name = styled.h2`
 font-size: 50px;
 font-weight: 700;
 font-family: Josefin Sans;
    span{
        position: relative;
        z-index: 0;
            &::before {
                content:'';
                position: absolute;
                background-color: ${theme.color.accent};
                height: 20px;
                width: 426px;
                bottom: 0;
                z-index:-1;
            }
 }
`
const WrapperPhoto = styled.div`
    position: relative;
    z-index: 0;
        &::before {
        content:'';
        display: inline-block;
        position: absolute;
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.color.accent};
        left:24px;
        top: -24px;
        z-index: -1;

    }

`
const Photo = styled.img`
    width: 370px;
    height:430px;
    object-fit: cover;
`
const MainTitle = styled.h1`
font-size: 27px;
font-weight: 400;
`