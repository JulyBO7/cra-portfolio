import styled from "styled-components"
import { SectionTitle } from './../../../components/SectionTitle';
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import photoTimer from '../../../assets/images/Timer.png'
import photoSocial from '../../../assets/images/SN.png'
import { Container } from './../../../components/container/Container';
import { TabMenu } from "./tabMenu/TabMenu";


const menuWorks = ['ALL', 'LANDING PAGE', 'REACT', 'SPA'];

export function Works() {
    return (
        <StyleWorks>
            <Container>
                <SectionTitle>My works</SectionTitle>
                <TabMenu menuArray={menuWorks}></TabMenu>
                <FlexWrapper justify='space-between' align="flex-start">
                    <Work src={photoSocial} title='Social Network' text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed 
                                                         do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem 
                                                          ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectr incididunt ut labore et dolore maamet, consectetur adipisicing elitipsujjj dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit consectr incididunt ut labore et dolore maamet, consectetur adipisicingdolor sit consectr incididunt ut labore et dolore maamet, consect "/>
                    <Work src={photoTimer} title='Timer' text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed 
                                                 do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. 
                                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim" />
                </FlexWrapper>
            </Container>

        </StyleWorks>
    )
}

const StyleWorks = styled.section`

`