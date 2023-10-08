import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { Icon } from "../../../components/icon/Icon"
import { Slider } from './slider/slider';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { IconWrapper } from "../skills/skill/skill";


export function Testimony() {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction='column' align="center">
                <IconWrapper>
                    <Icon iconId='quote' />
                </IconWrapper>
                <Slider />
            </FlexWrapper>
        </StyledTestimony>
    )
}
const StyledTestimony = styled.section`
`

const Pagination = styled.div`
`


