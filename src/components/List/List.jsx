import { Task } from '../Task/Task'
import { StyledList } from './styles'
import { useState } from 'react'

export function List() {

  /*const tasks = [
    { id: 1, title: "Pagar Contas" },
    { id: 2, title: "Renovar CNH" },
    { id: 3, title: "Fazer Compra" }
  ]*/
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function addTask(e){
    e.preventDefault();
    setTaskList([{ id: new Date().getTime(), title: newTask }, ...taskList]);
    setNewTask("");
  }

  function removeTask(id){
    //console.log(`Tarefa com id ${id} removida`); 
    setTaskList(taskList.filter((task) => task.id !== id)); //retorna um novo array com todos os elementos exceto o que tem o id passado
  }

  return (
    <>
      <StyledList>
        <form onSubmit={addTask}>
          <input 
            type="text" 
            placeholder="Adicionar Tarefa" 
            value = {newTask}
            onChange={(e) => setNewTask(e.target.value)}
            />
          <button 
            onClick={addTask} 
            disabled ={
              newTask.trim() === "" ? true : false
            }
          >
            Criar
          </button>
        </form>                                                                                                                                                                                                                 

        {
          taskList.map((task) => (
            <Task key={task.id} title={task.title} id={task.id} onRemove={removeTask} />                                                                              
            )
          )
        }      
      </StyledList>
    </>
  )
}