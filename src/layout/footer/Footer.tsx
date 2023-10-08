import styled from "styled-components"
import { Icon } from './../../components/icon/Icon';
import { FlexWrapper } from './../../components/FlexWrapper';
import { theme } from './../../styles/theme/Theme';

export function Footer() {
    return (
        <StyledFooter>
                <FlexWrapper direction={'column'} justify={"center"} align={"center"}>
                    <Name>Yuliya</Name>
                    <SocialList>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={'vk'} width={'21px'} height={'21px'}></Icon>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={'telegram'} width={'21px'} height={'21px'}></Icon>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={'instagram'} width={'21px'} height={'21px'}></Icon>
                            </SocialLink>
                        </SocialItem>
                    </SocialList>
                    <Copyright> © 2023 Yuliya Balaeva, All Rights Reserved.</Copyright>
                </FlexWrapper>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    min-height: 50vh;
    background-color: ${theme.color.primeryBG};
`
const Name = styled.h3`
font-family: Josefin Sans, sans-serif;
font-size: 22px;
font-weight: 700;
letter-spacing: 3px;
margin-top: 40px;
`
const SocialList = styled.ul`
margin: 26px 0 34px;
display: flex;
gap: 20px;
`
const SocialItem = styled.li`
`
const SocialLink = styled.a`
display: flex;
justify-content: center;
align-items: center;
width: 35px;
height: 35px;
border-radius: 25px;
background-color: rgba(255, 255, 255, 0.10);
color: ${theme.color.accent};  
    &:hover{
        background-color: ${theme.color.accent};  
        color: #1F1F20;
        transform: translateY(-4px);    
    }
`
const Copyright = styled.p`
color: rgba(255, 255, 255, 0.50);
text-align: center;
font-size: 12px;
font-weight: 400;
`