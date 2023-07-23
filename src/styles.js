import styled from "styled-components";
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

export const Container = styled.div`
  background: linear-gradient(90deg, #383838 0%, #000 81.25%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToDoList = styled.div`
  background: #ffff;
  padding: 30px 20px;
  border-radius: 15px;

  ul {
    padding: 0;
    margin-top: 60px;
  }
`;

export const Input = styled.input`
  border: 2px solid rgba(209, 211, 212, 0.4);
  border-radius: 15px;
  height: 40px;
  margin-right: 10px;
  width: 342px;
  margin-right: 40px;
  font-weight: 900;
`;

export const Button = styled.button`
  background: #8052ec;
  border: none;
  border-radius: 15px;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  height: 40px;
  color: #ffff;
  width: 130px;

  cursor: pointer;
&: hover{
  opacity: 0.8
}


&: active{
  opacity: 0.6
}
`;

export const ListItem = styled.div`
  background: ${ props => props.$isFinished ? "#e8ff8b" : "#e4e4e4"};
  border: none;
  border-radius: 15px;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  height: 60px;
  width: 500px;
  color: #000000;
  li {
    list-style: none;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 10px;
`;




export const Trash = styled (FcEmptyTrash)`
cursor: pointer;
`;



export const Check = styled (FcCheckmark)`
cursor: pointer;
`;




export const SemLista = styled.h3`
 
font-weight: 900;
font-size: 17px;
line-height: 2px;
height: 60px;
width: 500px;
color: #000000;
li {
  list-style: none;
}
display: flex;
align-items: center;
justify-content: center;
`;