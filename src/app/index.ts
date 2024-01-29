import styled, { css } from 'styled-components';

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  background: #343434;
`;

export const Main = styled.main`
 display: flex;
 flex-direction: column;
 align-items: center;
 width: 100%;
 padding: 2.5rem;

 h1 {
  font-size: 14px;
  display: flex;
  justify-content: start;

  max-width: 516px;
  margin: 3rem 0 0.5rem 0;
  width: 100%;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #7a7a7a;
 }
`


export const FormsContainer = styled.div`
  margin-top: 2.4rem;
  max-width: 516px;
  height: 100%;
  width: 100%;
  
`


const commonStyles = css`
  font-size: 14px;
`;

const primaryStyles = css`
  background: transparent;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: center;
  color: #5f5f5f;

  border: none;

  text-decoration: underline;
`;

const secondaryStyles = css`
  background: #5f5f5f;
  border-radius: 8px;
  border: none;
  color: #313131;
  font-size: 14px;

  padding: 12px 24px;
`;

export const Button = styled.button<ButtonProps>`
  ${commonStyles}

${(props) => props.primary && primaryStyles}
${(props) => props.secondary && secondaryStyles}
`;


export const Forms = styled.form`
  background: #313131;
  padding: 1.5rem;
  border-radius: 3px;

  display: flex;
  gap: 1rem;
  align-items: center;
  flex-direction: column;

  img {
    width: 88px;
    height: 88px;
    border-radius: 2.25rem;
    object-fit: contain;
    padding: 32px;
  }

  div {
    flex-direction: column;
    width: 100%;
    display: flex;
  }
  div input {
    width: 100%
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      display: none;
    }

    div {
    width: 88px;
        height: 88px;
        border-radius: 2.25rem;
        border: solid 1px #4b4b4b;
        overflow: hidden;
    }
  }


`

export const Textarea = styled.textarea`
  width: 100%;
`


export const Footer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 1rem;

`

export const FormsContent = styled.div`
display: flex;
gap: 1rem;

 input {
  width: 100%;
  background: #494949;
  padding: 1rem;

  border-radius: 8px;
  border: none;
  color: #9f9f9f;
  font-size: 14px;
 }

 textarea {
  height: 80px;
  width: 100%;
  background: #494949;
  padding: 1rem;

  border-radius: 8px;
  border: none;
  color: #9f9f9f;
  font-size: 14px;

  resize: none;
 }
 
`


export const Post = styled.div`
  display: flex;
  background: #313131;
  gap: 2rem;


  padding: 1.4rem;
  border-radius: 3px;
  border: solid 1px #3b3b3b;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1.5rem;
    padding: 0.5rem;
    p {
      font-size: 16px;
      line-height: 1.25;
      letter-spacing: normal;
      color: #9f9f9f;
    }

    span {
      font-size: 14px;
      color: #9f9f9f;
      
    }
  }

  img {
    width: 88px;
    height: 88px;
    border-radius: 2.25rem;

    border: solid 1px #4b4b4b;
    object-fit: contain;
  
  }
`

export const Feed = styled.div`
  width: 100%;
  max-width: 516px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`