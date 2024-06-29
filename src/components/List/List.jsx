import { Task } from '../Task/Task'
import { StyledList } from './styles'

export function List() {
  return (
    <>
      <StyledList>
        <form >
          <input type="text" placeholder="Adicionar Tarefa" />
          <button type="submit">Criar</button>
        </form>
      <Task title="Pagar Contas" id={1} />
      <Task title="Renovar CNH" id={2} />
      <Task title="Fazer Compra" id={3} />
      </StyledList>
    </>
  )
}