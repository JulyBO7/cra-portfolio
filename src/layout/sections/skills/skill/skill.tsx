import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from './../../../../components/FlexWrapper';
import { theme } from "../../../../styles/theme/Theme";


type SkillPropsType = {
    iconId: string
    title: string
    text: string
}
export function Skill(props: SkillPropsType) {
    return (
        <StyledSkill>
            <FlexWrapper direction="column" align="center">
                <IconWrapper>
                    <Icon iconId={props.iconId}></Icon>
                </IconWrapper>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.text}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    )
}
const StyledSkill = styled.div`
width: 380px;
`
export const IconWrapper= styled.div`
margin: 100px 0 0;
position: relative;
    &::before{
    content:'';
    display: inline-block;
    width: 80px;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.10);

    position: absolute;
    left: 50%;
    top: 50%;
    transform: rotate(45deg) translate(-50%,-50%);
    transform-origin: left top;
 }
`
const SkillTitle = styled.h3`
text-transform: uppercase;
margin: 70px 0 15px;
`
const SkillText = styled.p`
text-align: center;
`