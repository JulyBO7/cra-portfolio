import styled from "styled-components"
import { FlexWrapper } from './../../../components/FlexWrapper';
import { Skill } from "./skill/skill";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from './../../../components/container/Container';

export function Skills() {
        return (
                <StyledSkills>
                        <Container>
                                <SectionTitle>My skills</SectionTitle>
                                <FlexWrapper justify="space-between" wrap="wrap">
                                        <Skill iconId="react"
                                                title="React"
                                                text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'/>
                                        <Skill iconId="html"
                                                title="HTML"
                                                text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'/>
                                        <Skill iconId="styled-component"
                                                title="Styled-component"
                                                text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'/>
                                        <Skill iconId="css"
                                                title="CSS"
                                                text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'/>
                                        <Skill iconId="tsx"
                                                title="Type Script"
                                                text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'/>
                                        <Skill iconId="figma"
                                                title="Figma"
                                                text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'/>
                                </FlexWrapper>
                        </Container>

                </StyledSkills>
        )
}

const StyledSkills = styled.section`
    min-height:100vh;
    background-color: rgb(247, 250, 247);
`