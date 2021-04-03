import React from 'react';
import styled from "styled-components";
import {FcMusic} from"react-icons/fc";

const Form = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    <Frame>
      <Input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <Button onClick={onCreate}>
      <Icon></Icon>
      </Button>
      
    </Frame>
  );
};

const Frame = styled.div`
    display: flex;
`

const Input = styled.input`
    flex: auto;
    font-size: 1.25rem;
    outline: none;
    border: none;
    border-bottom: 1px solid;
`

const Button = styled.button`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 3px;
    background: none;
    border: none;
    font-weight: 600;
    cursor: pointer;
`

export const Icon = styled(FcMusic)`
    font-size: xx-large;
`

export default Form;