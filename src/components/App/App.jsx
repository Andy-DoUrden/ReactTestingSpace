import { Component } from 'react';
import shortid from 'shortid';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container } from './App.styled';

// import Counter from 'components/Counter';
// import ColorPicker from 'components/ColorPicker';
// import TodoManager from 'components/TodoManager';
import Timer from 'components/Clock';
import Gallery from 'components/Gallery';

// const colorPack = [
//   { label: 'red', color: '#aa0000' },
//   { label: 'blue', color: '#0077ff' },
//   { label: 'green', color: '#008800' },
//   { label: 'pink', color: '#aa00aa' },
//   { label: 'lasure', color: '#00bb8c' },
// ];

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
    showModal: false,
  };

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem('todosPack'));

    if (todosPack) {
      this.setState({ todosPack: todos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // const prevTodosPack = prevState.todosPack;
    const nextTodosPack = this.state.todosPack;

    if (prevState !== this.state) {
      localStorage.setItem('todosPack', JSON.stringify(nextTodosPack));
    }

    // if (
    //   nextTodosPack.length > prevTodosPack.length &&
    //   prevTodosPack.length !== 0
    // ) {
    //   this.toggleModal();
    // }
    //? пояснення в addTodo
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
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

    this.toggleModal();
    //? або можна замість впихування toggleModal зробити через дід апдейт (комент)
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
    // const { filter, showModal } = this.state;
    // const filteredTodos = this.getVisibleTodos();

    return (
      <Container>
        <ToastContainer autoClose={3000} theme={'dark'} />
        <Timer />
        {/* <Counter initialValue={1} Timer={Timer} /> */}

        {/* <ColorPicker colors={colorPack} />

        <TodoManager
          todos={filteredTodos}
          changeStatus={this.handleCompletedChange}
          deleteTodo={this.deleteTodo}
          onAddTodoSubmit={this.addTodo}
          todoFilterValue={filter}
          onHandleFilterChange={this.changeFilter}
          onOpenModalClick={this.toggleModal}
          showModal={showModal}
        /> */}
        <Gallery
          onOpenModalClick={this.toggleModal}
          showModal={this.state.showModal}
        />
      </Container>
    );
  }
}