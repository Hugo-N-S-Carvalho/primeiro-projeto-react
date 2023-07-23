// importação
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { Container, ToDoList, Input, Button, ListItem, Trash, Check, SemLista } from "./styles.js";


function App() {
  // Todo código JS

  // const list = [
  //   { id: uuid(), task: "Tarefa 1" },
  //    { id: uuid(), task: "Tarefa 2" },
  //    { id: uuid(), task: "Tarefa 3" },
  //    { id: uuid(), task: "Tarefa 4" },
  //    "Tarefa 1", "Tarefa 2", "Tarefa 3", "Tarefa 6"
  // ]

  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  console.log(list);

  function inputMudou(mudou) {
    setTask(mudou.target.value);
  }

  function buttonClicado() {

    if(task){
      setList([...list, { id: uuid(), task: task, finished: false }]); // ou pode ser: setList([ ...list, {id: uuid(), task}])
  
    }
    }


  function finalizarTarefa(id) {

    const newList = list.map(item => (
      item.id == id ? { ...item, finished: !item.finished } : item

    ))

    setList(newList)
  }

  function deletarTarefa(id) {

    const newList = list.filter(item => item.id !== id)

    setList(newList)
  }





  // retorna código html
  return (
    // tudo aqui dentro é código html e para colocar algo JS, tem que colocar dentro dos bigodinhos {código JS}
    <Container>
      <ToDoList>
        <Input onChange={inputMudou} placeholder="Digite um lembrete" />

        <Button onClick={buttonClicado}>Adicionar</Button>

        <ul>
          {

            list.length > 0 ? (


              list.map((item) => (
                <ListItem $isFinished={item.finished} key={item.id}>
                  <Check onClick={() => finalizarTarefa(item.id)} />
                  <li >{item.task}</li>
                  <Trash onClick={() => deletarTarefa(item.id)} />
                </ListItem>
              ))
            ) :( <SemLista>Não há itens na lista</SemLista>)
            
            }

        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;
