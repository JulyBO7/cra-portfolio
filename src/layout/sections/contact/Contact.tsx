import styled from 'styled-components';
import { SectionTitle } from './../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from './../../../components/container/Container';
import { theme } from './../../../styles/theme/Theme';


export function Contact() {
    return (
        <StyledContact>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm>
                    <Field placeholder={'name'} />
                    <Field placeholder={'name'} />
                    <Field as={'textarea'} placeholder={'name'} />
                    <Button type={'submit'} >SEND MESSAGE</Button>
                </StyledForm>
            </Container>
        </StyledContact>
    )
}

const StyledContact = styled.section`
    min-height:60vh;
    background-color: rgb(150, 195, 162);

`
const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0 auto;
    ${Button}{
        margin: 0 auto;
        z-index: 1;
        margin-top: 10px;
    &:hover{
        &::before{
            width: 100%;
            height: 100%;
            z-index: -1;
        }
    }   
}
    textarea{
    width: 100%;
    height: 155px;
    resize: none;
    }

`
const Field = styled.input`
    width: 100%;
    color: ${theme.color.font};
    text-transform: capitalize;
    font-family: Poppins, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.6px;
    background-color: ${theme.color.secondaryBG};
    border: 1px solid #4A4A4A;
    padding: 7px 15px;
        &:fokus-visible {
        outline: none;
    }
` 

