import { useState } from 'react';

import shortid from 'shortid';
import useLocalStorage from 'hooks/useLocalStorage';

import TodoManager from 'components/TodoManager';

const defaultTodosPack = [
  { id: 'id-1', task: 'Завершити блок HTML', completed: true },
  { id: 'id-2', task: 'Завершити блок CSS', completed: true },
  { id: 'id-3', task: 'Завершити блок JS', completed: true },
  { id: 'id-4', task: 'Завершити блок REACT', completed: false },
  { id: 'id-5', task: 'Завершити блок NODEJS', completed: false },
];

const Home = () => {
  const [todosPack, setTodosPack] = useLocalStorage(
    'todosPack',
    defaultTodosPack
  );
  const [filter, setFilter] = useState('');

  const handleCompletedChange = id => {
    setTodosPack(todosPack =>
      todosPack.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = text => {
    if (text !== '') {
      const newTodo = {
        id: shortid.generate(),
        task: text,
        completed: false,
      };

      setTodosPack(todosPack => [newTodo, ...todosPack]);
    }
  };

  const deleteTodo = id => {
    setTodosPack(todosPack => todosPack.filter(todo => todo.id !== id));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filteredTodos = () => {
    const normalizedFilterValue = filter.toLowerCase();

    return todosPack.filter(todo =>
      todo.task.toLowerCase().includes(normalizedFilterValue)
    );
  };

  return (
    <>
      <TodoManager
        todos={filteredTodos()}
        changeStatus={handleCompletedChange}
        deleteTodo={deleteTodo}
        onAddTodoSubmit={addTodo}
        todoFilterValue={filter}
        onHandleFilterChange={changeFilter}
      />
    </>
  );
};

export default Home;
