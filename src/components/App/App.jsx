import { Component } from 'react';
import shortid from 'shortid';
import { Container } from './App.styled';
import Counter from 'components/Counter';
import ColorPicker from 'components/ColorPicker';
import TodoManager from 'components/TodoManager';

const colorPack = [
  { label: 'red', color: '#aa0000' },
  { label: 'blue', color: '#0077ff' },
  { label: 'green', color: '#008800' },
  { label: 'pink', color: '#aa00aa' },
  { label: 'lasure', color: '#00bb8c' },
];

const todosPack = [
  { id: 'id-1', task: 'Завершити блок HTML', completed: true },
  { id: 'id-2', task: 'Завершити блок CSS', completed: true },
  { id: 'id-3', task: 'Завершити блок JS', completed: true },
  { id: 'id-4', task: 'Завершити блок REACT', completed: false },
  { id: 'id-5', task: 'Завершити блок NODEJS', completed: false },
];

export default class App extends Component {
  state = {
    todosPack,
    filter: '',
  };

  handleCompletedChange = id => {
    this.setState(({ todosPack }) => ({
      todosPack: todosPack.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  addTodo = text => {
    if (text !== '') {
      const newTodo = {
        id: shortid.generate(),
        task: text,
        completed: false,
      };

      this.setState(({ todosPack }) => ({
        todosPack: [newTodo, ...todosPack],
      }));
    }
  };

  deleteTodo = id => {
    this.setState(prevState => ({
      todosPack: prevState.todosPack.filter(todo => todo.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { todosPack, filter } = this.state;

    const normalizedFilterValue = filter.toLowerCase();

    return todosPack.filter(todo =>
      todo.task.toLowerCase().includes(normalizedFilterValue)
    );
  };

  render() {
    const filteredTodos = this.getVisibleTodos();

    return (
      <Container>
        <Counter initialValue={0} />
        <ColorPicker colors={colorPack} />
        <TodoManager
          todos={filteredTodos}
          changeStatus={this.handleCompletedChange}
          deleteTodo={this.deleteTodo}
          onAddTodoSubmit={this.addTodo}
          todoFilterValue={this.state.filter}
          onHandleFilterChange={this.changeFilter}
        />
      </Container>
    );
  }
}
