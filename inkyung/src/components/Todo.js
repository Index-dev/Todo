import React, { Component } from 'react';
import styled from "styled-components";
import {FcFullTrash, FcCheckmark} from"react-icons/fc";

class Todo extends Component {
    componentDidUpdate(e) {
        return this.props.checked !== e.checked;
      }
      
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;

    return (
        <DIV>
        <Item onClick={() => onToggle(id)}>
            {
                (checked) ? 
                <CFrame>
                    <Check><FcCheckmark/></Check>
                    <Text>
                        <Checked>{text}</Checked>
                    </Text>
                </CFrame>
                :
                <CFrame><Text>{text}</Text></CFrame>
            }
        </Item>
        <Remove onClick={(e) => {onRemove(id)}}><FcFullTrash/></Remove>
      </DIV>
    );
  }
}

const DIV = styled.div`
    display: grid;
    height: 3rem;
    grid-template-columns: 90% 10%;
    grid-template-areas: "Item Rm";
`

const Item = styled.div`
    grid-area: Item;
    padding: .5rem;
    align-items: center;
    font-size: large;
    cursor: pointer;
    transition: all 0.15s;
    user-select: none;
`

const Remove = styled.div`
    grid-area: Rm;
    margin-right: 1rem;
    font-size: x-large;
    display: flex; 
    align-items: center; 
    justify-content: center; 
    cursor: pointer;

    &:hover{
        font-size: xx-large;
        font-weight: 800;
    }
`

const CFrame = styled.div`
    display: grid;
    grid-template-columns: 10% 90%;
    grid-template-areas: ". TXT";
`

const Text = styled.div`
    grid-area: TXT;
    display: flex; 
    font-size: 1.2rem;

    &:hover{
        font-size: x-large;
    }
`

const Checked = styled.div`
    text-decoration: line-through;
    color: #adb5bd;
    display: flex; 
    align-items: center; 
    justify-content: center; 
`

const Check = styled.div`
    font-size: 1.5rem;
    line-height: 1.5rem;
    margin-left: .7rem;
    float: right;
`

export default Todo;