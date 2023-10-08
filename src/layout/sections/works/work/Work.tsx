import styled from "styled-components"
import { theme } from "../../../../styles/theme/Theme"
import { Link } from './../../../../components/Link';
import { Button } from './../../../../components/Button';



type WorkPropsType = {
    src: string
    title: string
    text: string
}
export function Work(props: WorkPropsType) {
    return (
        <StyledWork>
            <ImageWorkWrap>
                <ImageWork src={props.src}></ImageWork>
                <Button> view project </Button>
            </ImageWorkWrap>
            <Wrap>
                <TitleWork>{props.title}</TitleWork>
                <TextWork>{props.text}</TextWork>
                <Link>Demo</Link>
                <Link>Code</Link>
            </Wrap>
        </StyledWork >
    )
}
const StyledWork = styled.div`
background-color: ${theme.color.secondaryBG};
max-width: 540px;
`
const ImageWork = styled.img`
width: 100%;
height: 260px;
object-fit: cover;
`
const ImageWorkWrap = styled.div`
position: relative;
    &:hover{
        &::before{
        background-color: rgba(0, 0, 0, 0.30);
        backdrop-filter: blur(4px);
    }
    ${Button}{
        opacity: 1;
        background-color: ${theme.color.accent};
     }
}
 &::before{
    content:'';
    display: inline-block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
 }
 ${Button}{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    opacity: 0;
 }
`

const Wrap = styled.div`
margin: 25px 20px 35px;
    ${Link} {
    padding: 10px 0 10px;
    margin-right: 20px;
}
`
const TextWork = styled.p`
margin-top: 15px;
margin-bottom: 20px;
`
const TitleWork = styled.h3`
`
