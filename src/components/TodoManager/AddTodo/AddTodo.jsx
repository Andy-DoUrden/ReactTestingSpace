import { useState } from 'react';
// Component
// import shortid from 'shortid';
import { toast } from 'react-toastify';
import { TodoForm, FormName, NewTodoValue, AddTodo } from './AddTodo.styled';

const TodoList = ({ onSubmit }) => {
  const [newTodoText, setNewTodoText] = useState('');

  const handleInputChange = e => {
    const { value } = e.currentTarget;

    setNewTodoText(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (newTodoText.trim() === '') {
      toast.warning('Воу-воу козаче, введи щось)');
      return;
    }

    onSubmit(newTodoText);

    setNewTodoText('');
  };

  return (
    <TodoForm onSubmit={handleSubmit}>
      <FormName>
        Добавити завдання:
        <NewTodoValue
          type="text"
          name="newTodoText"
          value={newTodoText}
          onChange={handleInputChange}
        />
      </FormName>

      <AddTodo type="submit">Добавити</AddTodo>
    </TodoForm>
  );
};

export default TodoList;

// export default class TodoList extends Component {
//   state = {
//     newTodoText: '',
//     // completed: 'no',
//     // licence: false,
//   };

//   // textInputId = shortid.generate();

//   // handleLicenceChange = e => {
//   //   this.setState({ licence: e.currentTarget.checked });
//   // };

//   handleInputChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state.newTodoText);

//     this.setState({ newTodoText: '' });
//   };

//   render() {
//     const { newTodoText } = this.state;

//     return (
//       <TodoForm onSubmit={this.handleSubmit}>
//         <FormName>
//           Добавити завдання:
//           <NewTodoValue
//             type="text"
//             name="newTodoText"
//             value={newTodoText}
//             onChange={this.handleInputChange}
//           />
//         </FormName>

//         {/* <FormName htmlFor={this.textInputId} />
//         <NewTodoValue id={this.textInputId} /> */}

//         {/* <label>
//           <input
//             type="radio"
//             name="completed"
//             value="yes"
//             onChange={this.handleInputChange}
//             checked={this.state.completed === 'yes'}
//           />
//           YES
//         </label>

//         <label>
//           <input
//             type="radio"
//             name="completed"
//             value="no"
//             onChange={this.handleInputChange}
//             checked={this.state.completed === 'no'}
//           />
//           NO
//         </label> */}

//         {/* <input
//           type="checkbox"
//           name="licence"
//           checked={this.state.licence}
//           onChange={this.handleLicenceChange}
//         /> */}

//         <AddTodo type="submit">Добавити</AddTodo>
//       </TodoForm>
//     );
//   }
// }

//? ЗАКОМЕНТОВАНІ ПРИКЛАДИ: УНІКАЛЬНОЇ ПАРИ LABEL + INPUT ... РАДІО КНОПОК ... CHECKBOX
