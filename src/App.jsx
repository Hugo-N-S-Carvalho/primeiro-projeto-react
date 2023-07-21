// importação
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { Container, ToDoList, Input, Button } from "./styles.js";

function App() {
  // Todo código JS

  // const list = [
  //   { id: uuid(), task: "Tarefa 1" },
  //    { id: uuid(), task: "Tarefa 2" },
  //    { id: uuid(), task: "Tarefa 3" },
  //    { id: uuid(), task: "Tarefa 4" },
  //    "Tarefa 1", "Tarefa 2", "Tarefa 3", "Tarefa 6"
  // ]

  const [list, setList] = useState([{ id: uuid(), task: "Nada" }]);
  const [task, setTask] = useState("");

  console.log(list);

  function inputMudou(mudou) {
    setTask(mudou.target.value);
  }

  function buttonClicado() {
    setList([...list, { id: uuid(), task: task }]); // ou pode ser: setList([ ...list, {id: uuid(), task}])
  }

  // retorna código html
  return (
    // tudo aqui dentro é código html e para colocar algo JS, tem que colocar dentro dos bigodinhos {código JS}
    <Container>
      <ToDoList>
        <Input onChange={inputMudou} placeholder="Digite um lembrete" />

        <Button onClick={buttonClicado}>Adicionar</Button>

        <ul>
          {list.map((item) => (
            <li key={item.id}>{item.task}</li>
          ))}
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;
