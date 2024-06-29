import types from 'prop-types';
import { StyledTask } from './styles';

export function Task(props) {

    //props é um objeto que contem tudo que foi passado como atributo para o componente

    return (
        <StyledTask>
            <p>{props.title}</p>
            <button> X </button>
        </StyledTask>
    )
}

Task.propTypes = {
    title: types.string.isRequired,
    id: types.number.isRequired
}
Task.defaultProps = {
    title: "Tarefa"
}