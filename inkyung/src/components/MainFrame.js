import React from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import {FcSurvey} from"react-icons/fc";
import styled from "styled-components";

const MainFrame = ({form, children}) => {
  const today = moment().format("yyyy.MM.DD");
  
  return (
    <Main>
      <Date>
        {today}
      </Date>
      <Title>
        인경's 투두뚜두 <FcSurvey/>
      </Title>
      <Form>
        {form}
      </Form>
      {
        children.props.todos.length===0 ?
        <Blank></Blank>
        :
        <List>
        { children }
        </List>
      }

    </Main>
  );
};

const Main = styled.div`
    background: white;
    width: 512px;
    margin: 0 auto;
    margin-top: 2rem;
`

const Date = styled.div`
    float: right;
    margin-right: 1rem;
    margin-top: .5rem;
`

const Title = styled.div`
    padding: 1.5rem;
    font-size: 2.5rem;
    text-align: center;
    font-weight: 100;
    color: black;
`

const Form = styled.div`
    padding: .5rem;
    align-items: center;
    display: flex;
    justify-content: center;
`

const List = styled.div`
    padding: 1.5rem;
    min-height: 5rem;
`

const Blank = styled.div`
    height: 1.5rem;
`

export default MainFrame;