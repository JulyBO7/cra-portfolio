import styled from "styled-components"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { theme } from "../../../../styles/theme/Theme"


export function Slider() {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
                    <Name>@ivan ivanow</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span ></span>
                <span className="active"></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    )
}

const Text = styled.p`
`
const Name = styled.span`
    display: inline-block;
    margin-top: 22px;
    text-align: center;
    font-family: Josefin Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
`

const StyledSlider = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;

`
const Slide = styled.div`
    text-align: center;
    margin: 72px 0 42px;
`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 25px;
            &+span {
            margin-left: 5px;
        }
    }
        & .active {
            width: 20px;
            height: 7px;
            background-color: #7572D5;
        }        
    
`
