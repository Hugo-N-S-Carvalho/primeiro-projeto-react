import styled from "styled-components";

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
`;

export const ListItem = styled.div`
  background: #e4e4e4;
  border: none;
  border-radius: 15px;
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
